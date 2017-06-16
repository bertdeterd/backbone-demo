define(["models/eenheid-model", "collections/eenheid-collection"], function(
  EenheidModel,
  EenheidCollection
) {
  "use strict";
  var EenheidView = Backbone.View.extend({
    el: "#content",

    template: _.template(
      "<div>hallo eenheid <%= Id %>, <%= Code %>, <%= Description %></div"
    ),

    initialize: function(param) {
      this.code = param.code;

      this.model = EenheidCollection.getInstance().get(this.code);

      if (EenheidCollection.getInstance().length > 0) {
        this.model = EenheidCollection.getInstance().get(this.code);
        this.render();
      } else {
        this.eenheidCollection = new EenheidCollection();
        this.listenTo(this.eenheidCollection, "sync", this.handleSync);
        this.eenheidCollection.fetch();
      }

      //this.model = new EenheidModel({Code : this.code});
      //this.listenTo(this.model, "sync", this.handleSync);
      //this.model.fetch();

      //tijdelijk hier moet naar handleSync
      //this.render();
    },

    handleSync: function() {
      this.model = EenheidCollection.getInstance().get(this.code);
      this.render();
    },

    render: function() {
      var html = this.template(this.model.toJSON());
      this.$el.html(html);
    }
  });
  return EenheidView;
});
