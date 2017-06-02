define(
  ["jquery", "underscore", "backbone", "../models/eenheid-model"],
  function($, _, Backbone, Model) {
    "use strict";
    var EenheidCollection = Backbone.Collection.extend({
      model: Model,

      url: SERVICE_URL + "CodeListSet?$filter=Id%20eq%20%27Eenheid%27&sap-client=200"
    });

    return EenheidCollection;
  }
);
