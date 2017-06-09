define(["jquery", "underscore", "backbone"], function($, _, Backbone) {
  "use strict";
  var Eenheid = Backbone.Model.extend({
    idAttribute: "Code"
  });
  return Eenheid;
});
