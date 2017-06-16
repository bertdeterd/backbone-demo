define(
  ["text!../templates/header.html"],
  function(viewTemplate) {
    "use strict";
    
    var HeaderView = Backbone.View.extend({
      el: "#header",

      events: {
        "click .nav": "displayNavItemAsActive"
      },

      template: _.template(viewTemplate),

      initialize: function() {
        this.render();
      },

      render: function() {
        var html = this.template();
        this.$el.html(html);
      },

      displayNavItemAsActive: function(e) {
        $(".nav").find(".active").removeClass("active");
        $(e.target).parent().addClass("active");
      }
    });
    return HeaderView;
  }
);
