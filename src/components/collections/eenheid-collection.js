define(
  ["models/eenheid-model"],
  function(Model) {
    "use strict";
    var instance;

    var EenheidCollection = Backbone.Collection.extend({
      
      model: Model,

      initialize: function(){
        instance = this;
      },

      parse: function(resp, options) {
        return resp.d.results;
      },

      url:
        SERVICE_URI +
          "CodeListSet?$filter=Id%20eq%20%27Eenheid%27&sap-client=200"
    });

    EenheidCollection.getInstance = function () {
      return (instance) ? instance : new EenheidCollection();
    };

    return EenheidCollection;
  }
);
