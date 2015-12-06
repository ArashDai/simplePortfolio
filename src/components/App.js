var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;



var App = React.createClass({
  render:function(){
    return(

      <div>

           
          <div className='container-fluid'>
            {this.props.children}
          </div>
          

      </div>
      
      )
  }
});


module.exports = App;