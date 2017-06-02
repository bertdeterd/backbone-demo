/* global SERVICE_URL */

define(
  [
    "jquery",
    "underscore",
    "backbone",
    "text!../templates/app-view.html",
    "../collections/eenheid-collection"
  ],
  function($, _, Backbone, viewTemplate, EenheidColl) {
    "use strict";
    var AppView = Backbone.View.extend({
      el: "div",

      className: "container-fluid",

      template: _.template(viewTemplate),

      render: function() {
        var mydata = {};
        var self = this;
        var ee = new EenheidColl();

		console.log(SERVICE_URL);

        ee.fetch().done(function(data, status, xhr) {
          mydata.list = data.d.results;
          mydata.name = "haala";

          var html = self.template(mydata);
          self.$el.html(html);
        });
      }
    });

    return AppView;
  }
);
