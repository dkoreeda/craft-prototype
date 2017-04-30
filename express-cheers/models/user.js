const bcrypt = require('bcrypt');

const db = require('../db');

const User = {};

User.create = (user) => {
  console.log("hit model", user);
  const password = bcrypt.hashSync(user.password, 10);

  return db.oneOrNone(
    'INSERT INTO users(email, password_digest) VALUES ($1, $2) RETURNING *',[ user.email, password ]
    );
};

User.findByEmail = (email) => {
  console.log("find by email", email);
  return db.oneOrNone(
    'SELECT * FROM users WHERE email = $1', [email]
  );
};

// User.findUser = (email) => {
//   return db.oneOrNone(
//     'SELECT * FROM users WHERE email = $1 RETURNING *', [email]
//   );
// }

module.exports = User;
