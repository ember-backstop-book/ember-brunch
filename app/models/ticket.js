App.Ticket = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  status: DS.attr('string'), // New | Open | Resolved
  createdAt: DS.attr('date'),
  reportedBy: DS.belongsTo('App.User'),
  assignedTo: DS.belongsTo('App.User')
});

App.loadFixtureData(App.Ticket, [
  { id: 1, title: 'Create a User model', description: 'Users create tickets and are assigned to tickets.', status: 'New', reportedBy: 1 },
  { id: 2, title: 'Allow ticket creation', description: 'A system should be able to create tickets', status: 'Open', reportedBy: 2, assignedTo: 3 }
]);
