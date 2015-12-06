var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;

var Routes = (

    <Route path='/' component={require('./components/App')}>

      <IndexRoute component={require('./components/homepage')} />
      <Route path='/about' componenet={require('./components/about')}/>
      <Route path='/contactus' componenet={require('./components/contactus')}/>
      <Route path='/gallery' componenet={require('./components/gallery')}/>



    </Route>





  );

module.exports = Routes;