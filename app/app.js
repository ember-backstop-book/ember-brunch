App = Ember.Application.create();

require('store');
require('router');

require('controllers/application');

require('routes/tickets');

require('templates/application');
require('templates/index');
require('templates/tickets');
require('templates/tickets/show');
require('templates/tickets/index');

require('views/applicationView');
require('views/tickets');

