const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Student } = require('../models');

const router = express.Router();

router.post('/join', isNotLoggedIn, async (req, res, next) => {
  const { id, name, password, fk_department_name, fk_department_category, grade, year, phone, mail } = req.body;
  try {
    const exUser = await Student.findOne({ where: { id } });
    if (exUser) {
      req.flash('joinError', '이미 가입된 계정입니다.');
      return res.redirect('/qazwsx98@@');
    }
    const hash = await bcrypt.hash(password, 12);
    await Student.create({
      id,
      name,
      password: hash,
      fk_department_name,
      fk_department_category,
      grade,
      year,
      phone,
      mail
    });
    return res.redirect('/');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      req.flash('loginError', info.message);
      return res.redirect('/');
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.redirect('/');
    });
  })(req, res, next);
});

router.get('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
