var ApplicationRoute = Ember.Route.extend({
  model: function () {
    return { appName: 'Game Dev' };
  }
});

export default ApplicationRoute;