define(
  ["jquery", "underscore", "backbone", "text!../templates/footer.html"],
  function($, _, Backbone, viewTemplate) {
    "use strict";
    var FooterView = Backbone.View.extend({
      el: "#footer",

      template: _.template(viewTemplate),

      initialize: function() {
        this.render();
      },

      render: function() {
        var html = this.template();
        this.$el.html(html);
      }
    });
    return FooterView;
  }
);
