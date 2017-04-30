const User = require('../../models/user');
const controller = {};

controller.signup = (req, res) => {
  const body = req.body;
  console.log(body);
  res.json(body);
}

controller.login = (req, res) => {
  const body = req.body;
  // console.log("login", body);
  User
    .findByEmail(req.body.email)
    .then((user) => {res.json(user)})
    .catch(err => console.log('Error: ', err));
}

controller.logout = (req, res) => {
    req.session.destroy(function (err) {
    res.redirect('/'); //Inside a callback… bulletproof!
  });
  // req.logout();
  // res.redirect('http://localhost:3000/signup');
}

controller.userId = (req, res) => {
    const obj = req.sessionStore.sessions;
    // const user = JSON.parse(obj);
    // const obj = req.session.passport.user;
    console.log(obj);
    // console.log(user);
    const data = [];

    for (var i = 0 in obj) {
      // const cookie = obj[i];
      // console.log("cookie ---> ", cookie.passport);
      data.push(obj[i]);
    }

    const userId = data[0].split('"id":')[1].split(',')[0];
    console.log(userId);
    return res.json(userId);
  }

module.exports = controller;
