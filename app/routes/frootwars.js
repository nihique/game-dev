import game from 'appkit/frootwars/game';

var FrootWarsRoute = Ember.Route.extend({
  model: function () {
    return game;
  }
});

export default FrootWarsRoute;