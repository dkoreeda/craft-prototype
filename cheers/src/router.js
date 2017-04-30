import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Search from './components/Search';
// import Navbar from './components/Navbar';
import SearchBeer from './components/SearchBeer';
import SearchByStyle from './components/SearchByStyle';
import SearchEvent from './components/SearchEvent';
import Suggestions from './components/Suggestion';
import Signup from './components/Signup';
import MyList from './components/MyList';
// import Logout from './components/Logout';


export default(
  <BrowserRouter>
    <div className="App">
      <Route exact path='/' component={Homepage} />
      <Route path='/signup' component={Signup} />
      <Route exact path='/search' component={Search} />
      <Route path='/search/beer' component={SearchBeer} />
      <Route path='/search/style' component={SearchByStyle} />
      <Route path='/search/events' component={SearchEvent} />
      <Route path='/style/beers' component={Suggestions} />
      <Route path='/list' component={MyList} />
    </div>
  </BrowserRouter>
);
