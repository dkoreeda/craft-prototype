const fetch = require('node-fetch');

const events = {};

events.searchByCity = (city) => {
  return fetch(`http://api.eventful.com/json/events/search?app_key=CL9wnQhhLKcv3Z7W&keywords=beer&l=${city}`, {
    headers: {
      'X-AMC-Vendor-Key': '31dd5ae1-9562-4b1f-b718-f8b1a3a97492'
    },
  });
}

module.exports = events;
