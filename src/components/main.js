import "es5-shim";

import AppView from "views/app-view";

import "assets/css/app.scss";
import "assets/css/sticky-footer.css";

import Workspace from "routers/router";

$(function() {
  var appView = new AppView();
  
  new Workspace();
  Backbone.history.start();
});
