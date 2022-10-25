const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Student } = require('../models');
const { Department } = require('../models');

const router = express.Router();

router.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile', { title: '한 눈에 보기', user: req.user });
});
router.get('/test', isLoggedIn, (req, res) => {
  res.render('imsi', { title: '임시페이지' });
});

router.get('/qazwsx98@@', isNotLoggedIn, (req, res) => {
  res.render('qazwsx98@@', {
    title: '데이터 넣기',
    user: req.user,
    joinError: req.flash('joinError'),
  });
});

router.get('/', (req, res) => {
  res.render('chat', {
    title: '관동대 공과대학 학사도우미',
    user: req.user,
    loginError: req.flash('loginError'),
  });
});


module.exports = router;
