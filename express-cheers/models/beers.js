const pgp = require('pg-promise')({});
const db = require('../db');

const Beer = {};

Beer.save = (obj) => {
  return db.oneOrNone(
    'INSERT INTO beers(name, short_name, description, image, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',[ obj.name, obj.category, obj.description, obj.image, obj.user_id ]
  );
}

Beer.find = (userId) => {
  return db.any('SELECT * FROM beers WHERE user_id = $1', [userId]);
}


module.exports = Beer;
