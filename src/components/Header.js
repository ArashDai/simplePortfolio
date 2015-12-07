var React = require('react');
var Router = require('react-router')
var Link = require('react-router').Link;
var Route = Router.Route;

var Header = React.createClass({


render: function(){
	return(
		<nav className="navbar navbar-default" role="navigation" id="mainNavbar">
			
			<div className="navbar-header">
				<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
				<Link className="navbar-brand" to="/">Casa Home Staging</Link>
			</div>
		
			
			<div className="collapse navbar-collapse navbar-ex1-collapse">
				<ul className="nav navbar-nav">
					<li><Link to="#">About</Link></li>
					<li><Link to="#">Contact Us</Link></li>
					<li><Link to="#">Gallery</Link></li>
				</ul>
				
				
			</div>
		</nav>


		)}
});

module.exports = Header;