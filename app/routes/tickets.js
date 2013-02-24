require('models/ticket');

App.TicketsRoute = Ember.Route.extend({
  setupController: function(model, controller) {
    this.controllerFor("users").set("content", App.User.find());
  },
  
  model: function() {
    return App.Ticket.find();
  }
});