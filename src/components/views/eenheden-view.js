define(
  [
    "jquery",
    "underscore",
    "backbone",
    "text!../templates/eenheden.html",
    "../collections/eenheid-collection"
  ],
  function($, _, Backbone, viewTemplate, EenheidColl) {
    "use strict";
    var EenhedenView = Backbone.View.extend({
      el: "#content",

      //events: {
      //  "click .list-group-item": "showdisplayNavItemAsActive"
      //},

      template: _.template(viewTemplate),

      initialize: function() {
        this.eenheidCollection = new EenheidColl();
        //var self = this;
        //this.viewdata = {};

        this.listenTo(this.eenheidCollection, "sync", this.handleSync);
        this.eenheidCollection.fetch();
      },

      handleSync: function(data) {
        this.render();
      },

      render: function() {
        console.log(this.eenheidCollection);

        var html = this.template({
          name: "Eenheden",
          items: this.eenheidCollection.toJSON()
        });
        this.$el.html(html);
      }
    });
    return EenhedenView;
  }
);
