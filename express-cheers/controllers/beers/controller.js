const Beer = require('../../models/beers');
controller = {};

controller.create = (req, res) => {
  // console.log("create");
  const body = req.body.beer.currentBeer;
  // console.log(req.body.user_id);

  const beer = {};
  beer.name = body.name;
  beer.category = body.category;
  beer.description = body.description;
  beer.image = body.icon;
  beer.user_id = req.body.user_id;

  Beer
    .save(beer)
    .then((user) => {res.json(user)})
    .catch(err => console.log('Error: ', err));
}

controller.find = (req, res) => {
  const userId = req.params.userId;
  console.log(userId);
  Beer
    .find(userId)
    .then((user) => {res.json(user)})
    .catch(err => console.log('Error: ', err));
}

// controller.mylist = (req, res) => {
//   const userId = req.params;
//   console.log(userId);
//   Beer
//     .
// }

module.exports = controller;
