var React = require('react');
var ReactDOM = require('react-dom');

require('./styles/main.scss')
var App = require('./components/App');
var routes = require('./config/routes');




ReactDOM.render(
  routes,
  document.getElementById('app')
);
