define(
  ["jquery", "underscore", "backbone", "../components/views/eenheden-view"],
  function($, _, Backbone, EenhedenView) {
    "use strict";
    var AppRouter = Backbone.Router.extend({
      routes: {
        'eenheden': "handleEenheden",
        'eenheden/:code': "handleCode",
        'posities': "handlePosities",
        'artikelen': "handleArtikelen",
        '': "handleIndex"
      },

      handleIndex: function() {
       $("#content").html("<div></div>");
      },

      handleCode: function(code){
          alert(code);
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
