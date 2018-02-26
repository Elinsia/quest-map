const express = require('express');
const router = express.Router();

const City = require('../models/cities');

router.get('/', function(req, res, next) {
  City.find()
    .populate('quests', 'title')
    .exec(function(err, cities) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        data: cities
      });
    });
});

router.get('/:id', function(req, res, next) {
  City.findById(req.params.id)
    .populate('quests', 'title')
    .exec(function (err, city) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        data: city
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
      data: result
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
        data: result
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
        data: result
      });
    });
  });
});

module.exports = router;