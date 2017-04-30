const beers = require('../../services/brewerydb');
const events = require('../../services/eventfulapi');

const controller = {};

controller.index = (req, res) => {
  // console.log("hit controller.index - params: ", req.params.beer);
  const input = req.params.beer;
  // console.log("input", input);
  beers
    .searchByName(input)
    .then(r => r.json())
    .then((data) => {
      res.json(data);
    })
    .catch(err => console.log('Error: ', err));
};

controller.show = (req, res) => {
  // console.log("hit controller styles - params: ", req.params.style);
  const input = req.params.style;
  beers
    .searchByStyle(input)
    .then(r => r.json())
    .then(data => res.json(data))
    .catch(err => console.log('Error: ', err));
};

controller.rec = (req, res) => {
  console.log("hit controller", req.params);
  const styleId = req.params.style;
  console.log('style id - params: ', styleId);
  beers
    .recommendations(styleId)
    .then(r => r.json())
    .then(data => res.json(data))
    .catch(err => console.log('Error: ', err));
};

controller.city = (req, res) => {
  const city = req.params.city;
  events
    .searchByCity(city)
    .then(r => r.json())
    .then(data => res.json(data))
    .catch(err => console.log('Error: ', err));
};

module.exports = controller;
