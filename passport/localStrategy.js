const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const { Student } = require('../models');

module.exports = (passport) => {
  passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'password',
  }, async (id, password, done) => {
    try {
      const exUser = await Student.findOne({ where: { id } });
      if (exUser) {
        const result = await bcrypt.compare(password, exUser.password);
        if (result) {
          done(null, exUser);
        } else {
          done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
        }
      } else {
        done(null, false, { message: '존재하지 않는 학생번호입니다.' });
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }));
};
