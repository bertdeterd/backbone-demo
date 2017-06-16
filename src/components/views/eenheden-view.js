define(
  ["text!../templates/eenheden.html", "collections/eenheid-collection"],
  function(viewTemplate, EenheidColl) {
    "use strict";
    var EenhedenView = Backbone.View.extend({
      el: "#content",

      template: _.template(viewTemplate),

      initialize: function() {
        this.eenheidCollection = new EenheidColl();
        this.listenTo(this.eenheidCollection, "sync", this.handleSync);
        this.eenheidCollection.fetch();
      },

      handleSync: function(data) {
        this.render();
      },

      render: function() {
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
