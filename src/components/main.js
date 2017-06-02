import 'es5-shim';

import AppView from './views/app-view';
import Backbone from 'backbone';

//import Workspace from 'routers/router';
import  $  from 'jquery';

window.$ = $;
// Initialize routing and start Backbone.history()
//new Workspace();
Backbone.history.start();

// Initialize the application view
$(function() {
  var appView = new AppView();
  appView.render();

});