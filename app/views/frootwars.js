import game from 'appkit/frootwars/game';

var FrootWarsView = Ember.View.extend({
  didInsertElement: function () {
    game.init();
  }
});

export default FrootWarsView;