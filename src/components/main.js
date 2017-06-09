import "es5-shim";

import AppView from "./views/app-view";
import Backbone from "backbone";

import "../assets/css/app.css";
import "../assets/css/sticky-footer.css";
import "../assets/css/header.css";

import Workspace from "../routers/router";
import $ from "jquery";

$(function() {
  console.log("init app");
  var appView = new AppView();
  appView.render();


  new Workspace();
  Backbone.history.start();
});
