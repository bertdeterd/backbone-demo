define(
  ["jquery", "underscore", "backbone", "../models/eenheid-model"],
  function($, _, Backbone, Model) {
    "use strict";
    var EenheidCollection = Backbone.Collection.extend({
      model: Model,

      parse: function(resp, options) {
        return resp.d.results;
      },

      url:
        SERVICE_URI +
          "CodeListSet?$filter=Id%20eq%20%27Eenheid%27&sap-client=200"
    });

    return EenheidCollection;
  }
);
