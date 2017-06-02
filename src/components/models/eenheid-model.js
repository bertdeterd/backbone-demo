define(["jquery", "underscore", "backbone"], function($, _, Backbone) {
  "use strict";
  var Eenheid = Backbone.Model.extend({
    idAttribute: "Id"
  });

  return Eenheid;
});
