define([], function() {
  "use strict";
  var Eenheid = Backbone.Model.extend({
    url: function(opt) {
      return encodeURI(
        SERVICE_URI +
          "CodeListSet?$filter=Code eq '" +
          this.Code +
          "'&sap-client=200"
      );
    },

    id: "Code",

    idAttribute: "Code",

    initialize: function(data) {
      this.data = data;
    }
  });
  return Eenheid;
});
