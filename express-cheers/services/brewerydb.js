const fetch = require('node-fetch');

const beers = {};

beers.searchByName = (beer) => {
  return fetch(`http://api.brewerydb.com/v2/search?q=${beer}&type=beer&withBreweries=Y&key=73771bdb4caaf9ad8015edd1125fa15b`);
}

beers.searchByStyle = (style) => {
  return fetch(`http://api.brewerydb.com/v2/search/style?q=${style}&withBreweries=Y&key=73771bdb4caaf9ad8015edd1125fa15b`);
}

beers.recommendations = (styleId) => {
  // console.log("hit services", styleId);
  return fetch(`http://api.brewerydb.com/v2/beers/?styleId=${styleId}&key=73771bdb4caaf9ad8015edd1125fa15b`);
}

module.exports = beers;

// http://api.brewerydb.com/v2/breweries/?established=2015&key=73771bdb4caaf9ad8015edd1125fa15b
// http://api.eventful.com/json/events/search?app_key=CL9wnQhhLKcv3Z7W&keywords=beer&l=new+york'
