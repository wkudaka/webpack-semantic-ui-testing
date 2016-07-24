var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var App = require('../components/App');
var Home = require('../components/Home');

var Contact = require('../components/Contact');
var Stuff = require('../components/Stuff');

var routes = (

  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='contact' component={Contact} />
      <Route path='stuff' component={Stuff} />
    </Route>
  </Router>
)

module.exports = routes;
