const express = require('express');
const router = express.Router();

const City = require('../models/cities');

router.get('/', function(req, res, next) {
  City.find()
    .exec(function(err, cities) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        obj: cities
      });
    });
});

router.get('/:id', function(req, res, next) {
  City.findById(req.params.id)
    .exec(function (err, city) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        obj: city
      });
    });
});

router.post('/', function(req, res, next) {
  let city = new City({
    title: req.body.title
  });
  city.save(function (err, result) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    res.status(201).json({
      message: 'City created',
      obj: result
    });
  });
});

router.patch('/:id', function(req, res, next) {
  City.findById(req.params.id, function(err, city) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!city) {
      return res.status(500).json({
        title: 'No City Found!',
        error: {city: 'City not found'}
      });
    }
    city.title = req.body.title;
    city.save(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Updated message',
        obj: result
      });
    });
  });
});

router.delete('/:id', function(req, res, next) {
  City.findById(req.params.id, function (err, city) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!city) {
      return res.status(500).json({
        title: 'No City Found!',
        error: {city: 'City not found'}
      });
    }
    city.remove(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Deleted city',
        obj: result
      });
    });
  });
});

module.exports = router;