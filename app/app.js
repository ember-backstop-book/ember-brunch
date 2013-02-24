App = Ember.Application.create();

require('store');
require('router');

require('controllers/application');
require('controllers/ticketsEdit');
require('controllers/ticketsNew');
require('controllers/ticketsShow');
require('controllers/users');

require('helpers/formattedDate');

require('routes/tickets');
require('routes/tickets/show');
require('routes/tickets/edit');
require('routes/tickets/new');
require('routes/users');
require('routes/users/edit');
require('routes/users/new');

require('templates/application');
require('templates/index');
require('templates/tickets');
require('templates/tickets/_form');
require('templates/tickets/show');
require('templates/tickets/index');
require('templates/tickets/edit');
require('templates/tickets/new');
require('templates/users');
require('templates/users/_form');
require('templates/users/show');
require('templates/users/index');
require('templates/users/edit');
require('templates/users/new');

require('views/applicationView');
require('views/commentField');
require('views/tickets');
require('views/ticketStatus');
require('views/users');
require('views/userSelect');

