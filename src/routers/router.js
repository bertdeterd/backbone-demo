define(
  [
    "jquery",
    "underscore",
    "backbone",
    "views/eenheden-view",
    "views/eenheid-view"
  ],
  function($, _, Backbone, EenhedenView, EenheidView) {
    "use strict";
    var AppRouter = Backbone.Router.extend({
      routes: {
        "eenheden": "handleEenheden",
        "eenheden/:code": "handleCode",
        "posities": "handlePosities",
        "artikelen": "handleArtikelen",
        "": "handleIndex"
      },

      initialize: function(){
           this.param = {};
      },

      handleIndex: function() {
        $("#content").html("<div></div>");
      },

      handleCode: function(code) {
        this.param.code = code;
        $("#content").html(new EenheidView(this.param).$el.html());
      },

      handlePosities: function() {
        $("#content").html("<div></div>");
      },

      handleArtikelen: function() {
        $("#content").html("<div></div>");
      },

      handleEenheden: function() {
        $("#content").html(new EenhedenView().$el.html());
      }
    });
    return AppRouter;
  }
);
