import Resolver from 'resolver';

var App = Ember.Application.create({
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  resolver: Resolver
});

init();

// private methods

function init() {
  initRoutes();
  initModels();
  initStore();
  initHelpers();
}

function initRoutes() {
  import Routes from 'appkit/routes';
  App.Router.map(Routes); 
}

function initModels() {
  // import Table from 'appkit/models/table';
  // App.Table = Table;
} 

function initStore() {
  // import Store from 'appkit/store';
  // App.Store = Store;
}

function initHelpers() {
  // import price from 'appkit/helpers/link_nav';
}

// export

export default App;
