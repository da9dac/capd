const local = require('./localStrategy');
const { Student } = require('../models');

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    Student.findOne({
      where: { id },
    })
      .then(user => done(null, user))
      .catch(err => done(err));
  });

  local(passport);
};
