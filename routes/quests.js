const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../models/users');
const City = require('../models/cities');
const Quest = require('../models/quests');

router.get('/', function(req, res, next) {
  Quest.find()
    .populate('users', 'login')
    .exec(function(err, quests) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        obj: quests
      });
    });
});

router.get('/:id', function(req, res, next) {
  Quest.findById(req.params.id)
    .populate('users', 'login')
    .exec(function (err, quest) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        obj: quest
      });
    });
});

router.post('/', function(req, res, next) {
  let quest = new Quest({
    title: req.body.title,
    point: req.body.point,
    shortDescription: req.body.shortDescription,
    fullDescription: req.body.fullDescription,
    score: req.body.score,
    active: false,
    complete: false,
    city: req.body.city
  });
  quest.save(function (err, result) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    City.findById(req.body.city, function(err, city) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      city.quests.push(result);
      city.save();
      res.status(201).json({
        message: 'Quest created',
        obj: result
      });
    });
  });
});

router.patch('/:id', function(req, res, next) {
  let decoded = jwt.decode(req.headers['x-access-token']);
  User.findById(decoded.user._id, function (err, user) {
    if (err) {
      return res.status(500).json({
        title: 'Not Authenticated',
        error: { message: 'Users do not match' }
      });
    }
    Quest.findById(req.params.id, function(err, quest) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      if (!quest) {
        return res.status(500).json({
          title: 'No Quest Found!',
          error: {quest: 'Quest not found'}
        });
      }
      quest.active = req.body.active;
      if (quest.active === true){
        console.log('active true');
        quest.users = user;
        if (quest.complete === true){
          console.log('complete true');
          quest.complete = req.body.complete;
          quest.save(function(err, result) {
            if (err) {
              return res.status(500).json({
                title: 'An error occurred',
                error: err
              });
            }
            user.questsActive.push(result);
            user.questsComplete.push(result);
            user.save();
            res.status(200).json({
              message: 'Updated quest',
              obj: result
            });
          });
        }
        else {
          console.log('complete false');
          quest.save(function(err, result) {
            if (err) {
              return res.status(500).json({
                title: 'An error occurred',
                error: err
              });
            }
            user.questsActive.push(result);
            user.questsComplete = user.questsComplete.filter(item => item.toString() !== quest._id.toString());
            user.save();
            res.status(200).json({
              message: 'Updated quest',
              obj: result
            });
          });
        }
      }
      else {
        console.log('active false');
        quest.users = quest.users.filter(item => item.toString() !== user._id.toString());
        quest.save(function(err, result) {
          if (err) {
            return res.status(500).json({
              title: 'An error occurred',
              error: err
            });
          }
          user.questsActive = user.questsActive.filter(item => item.toString() !== quest._id.toString());
          user.save();
          res.status(200).json({
            message: 'Updated quest',
            obj: result
          });
        });
      }
    });
  });
});

router.patch('/admin/:id', function(req, res, next) {
  Quest.findById(req.params.id, function(err, quest) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!quest) {
      return res.status(500).json({
        title: 'No Quest Found!',
        error: {quest: 'Quest not found'}
      });
    }
    quest.title = req.body.title;
    quest.point = req.body.point;
    quest.shortDescription = req.body.shortDescription;
    quest.fullDescription = req.body.fullDescription;
    quest.score = req.body.score;
    quest.save(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Updated quest',
        obj: result
      });
    });
  });
});

router.delete('/:id', function(req, res, next) {
  Quest.findById(req.params.id, function (err, quest) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!quest) {
      return res.status(500).json({
        title: 'No Quest Found!',
        error: {quest: 'Quest not found'}
      });
    }
    quest.remove(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Deleted quest',
        obj: result
      });
    });
  });
});

module.exports = router;