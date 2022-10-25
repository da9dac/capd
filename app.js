const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const helmet = require('helmet');
const hpp = require('hpp');
const RedisStore = require('connect-redis')(session);
require('dotenv').config();
//관리자 페이지 모듈 불러오기
const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSSequelize = require('@adminjs/sequelize')
//
const pageRouter = require('./routes/page');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const { sequelize } = require('./models');
const passportConfig = require('./passport');
const logger = require('./logger');

const app = express();
sequelize.sync();
passportConfig(passport);

//관리자 페이지 설정
const ADMIN = {
  email: 'yj171151@naver.com',
  password: 'qwer1234'
};
AdminJS.registerAdapter(AdminJSSequelize);
const db = require('./models');
const adminJS = new AdminJS({
  databases: [db],
  branding: {
    companyName: '관리자 페이지',
  },
  rootPath: '/admin',
})
const adminRouter = AdminJSExpress.buildAuthenticatedRouter(adminJS, {
  authenticate: async (email, password) => {
    if (ADMIN.password === password && ADMIN.email === email) {
      return ADMIN
    }
    return null
  },
  cookieName: 'adminJS',
  cookiePassword: 'testtest'
});
app.use(adminJS.options.rootPath, adminRouter)
//

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port', process.env.PORT || 8001);

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'));
  app.use(helmet());
  app.use(hpp());
} else {
  app.use(morgan('dev'));
}
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
const sessionOption = {
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
  store: new RedisStore({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    pass: process.env.REDIS_PASSWORD,
    logErrors: true,
  }),
};
if (process.env.NODE_ENV === 'production') {
  sessionOption.proxy = true;
  // sessionOption.cookie.secure = true;
}
app.use(session(sessionOption));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/', pageRouter);
app.use('/auth', authRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  logger.info('hello');
  logger.error(err.message);
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});
