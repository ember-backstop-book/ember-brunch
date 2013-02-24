App = Ember.Application.create();

require('store');
require('router');

require('controllers/application');

require('routes/tickets');
require('routes/tickets/edit');
require('routes/tickets/new');

require('templates/application');
require('templates/index');
require('templates/tickets');
require('templates/tickets/_form');
require('templates/tickets/show');
require('templates/tickets/index');
require('templates/tickets/edit');
require('templates/tickets/new');

require('views/applicationView');
require('views/tickets');
require('views/ticketStatus');

