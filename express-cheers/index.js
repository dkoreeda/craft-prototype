const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('./models/user');

const app = express();
app.use(cookieParser());
// const MemoryStore = express.session.MemoryStore;

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: false
  // store: new MemoryStore()
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(logger('dev'));
app.use(require('./router'));

passport.serializeUser((user, done) => {
  console.log('----------------------------------------');
  console.log('in passport.serializeUser callback');
  console.log('user: ');
  console.log(user);
  done(null, user);
});

passport.deserializeUser((userObj, done) => {
  console.log('----------------------------------------');
  console.log('in passport.deserializeUser callback');
  console.log('userObj: ');
  console.log(userObj);

  User
    .findByEmail(userObj.email)
    .then((user) => done(null, user))
    .catch((err) => {
      console.log('ERROR:', err);
      return done(null, false);
    });
});

passport.use('local-signup', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    (req, email, password, done) => {
      // console.log("here");
      const user = {email: req.body.email, password: req.body.password};
      User
        .create(user)
        .then((user) => {
          return done(null, user);
        })
        .catch((err) => {
          console.log('ERROR:', err);
          return done(null, false);
        });
          })
);

passport.use('local-login', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    (req, email, password, done) => {
      console.log("local-login");
      const user = {email: req.body.email, password: req.body.password};
      User
        .findByEmail(user.email)
        .then((user) => {
          if (user) {
            console.log(user);
            const isAuthed = bcrypt.compareSync(password, user.password_digest);

            if (isAuthed) {
              return done(null, user);
            } else {
              return done(null, false);
            }
          } else {
            return done(null, false);
          }
        });
    })
);

const PORT = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
