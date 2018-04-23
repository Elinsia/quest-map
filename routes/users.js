const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/users');

router.get('/', function(req, res, next) {
  User.find()
    .exec(function(err, users) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        data: users
      });
    });
});

router.get('/:id', function(req, res, next) {
  User.findById(req.params.id)
    .exec(function (err, user) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        data: user
      });
    });
});

router.get('/data/profile', function(req, res, next) {
  let decoded = jwt.decode(req.headers['x-access-token']);
  User.findById(decoded.user._id)
    .exec(function (err, user) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        data: {
          id: user._id,
          firstName: user.firstName,
          login: user.login
        }
      });
    });
});

router.use('/data/profile', function(req, res, next) {
  jwt.verify(req.headers['x-access-token'], 'secret', function (err, decoded) {
    if (err) {
      return res.status(401).json({
        title: 'Not Authenticated',
        error: err
      });
    }
    next();
  });
});

router.post('/signup', function(req, res, next) {
  let user = new User({
    login: req.body.login,
    password: bcrypt.hashSync(req.body.password, 10),
    firstName: req.body.firstName
  });
  user.save(function (err, result) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    res.status(201).json({
      data: result
    });
  });
});

router.post('/signin', function(req, res, next) {
  User.findOne({login: req.body.login}, function(err, user) {
    if (err) {
      return res.status(401).json({
        title: 'Login failed',
        error: {message: 'Invalid login credentials'}
      });
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json({
        title: 'Password failed',
        error: {message: 'Invalid password credentials'}
      });
    }
    let token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
    res.status(200).json({
      token: token,
      userId: user._id
    });
  });
});

router.patch('/:id', function(req, res, next) {
  User.findById(req.params.id)
    .exec(function(err, user) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      if (!user) {
        return res.status(500).json({
          title: 'No User Found!',
          error: {user: 'User not found'}
        });
      }
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 10);

        user.save(function(err, result) {
          if (err) {
            return res.status(500).json({
              title: 'An error occurred',
              error: err
            });
          }
          res.status(200).json({
            data: {
              id: result._id,
              firstName: result.firstName,
              login: result.login
            }
          });
        });
      }
      if (req.body.firstName) {
        user.firstName = req.body.firstName;

        user.save(function(err, result) {
          if (err) {
            return res.status(500).json({
              title: 'An error occurred',
              error: err
            });
          }
          res.status(200).json({
            data: {
              id: result._id,
              firstName: result.firstName,
              login: result.login
            }
          });
        });
      }
    });
});

router.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id)
    .exec(function (err, user) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      if (!user) {
        return res.status(500).json({
          title: 'No User Found!',
          error: {post: 'User not found'}
        });
      }
      else {
        res.status(200).json({
          data: user
        });
      }
    });
});

module.exports = router;