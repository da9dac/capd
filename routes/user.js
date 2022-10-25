const express = require('express');

const { isLoggedIn } = require('./middlewares');
const { Student } = require('../models');

const router = express.Router();

router.post('/:id', isLoggedIn, async (req, res, next) => {
  try {
    const user = await Student.find({ where: { id: req.user.id } });
    res.send('success');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
