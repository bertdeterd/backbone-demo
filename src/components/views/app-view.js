define(
  [
    "views/header-view",
    "views/footer-view",
    "text!../templates/app.html",
    "collections/eenheid-collection"
  ],
  function(HeaderView, FooterView, viewTemplate, EenheidColl) {
    "use strict";
    var AppView = Backbone.View.extend({
      el: "#app",

      className: "container-fluid",

      template: _.template(viewTemplate),

      initialize: function(options) {
        this.render();
      },

      render: function() {
        var html;
        html = this.template();
        this.$el.html(html);

        this.$("#header").html(new HeaderView().$el.html());
        this.$("#footer").html(new FooterView().$el.html());

        return this;
      }
    });

    return AppView;
  }
);
