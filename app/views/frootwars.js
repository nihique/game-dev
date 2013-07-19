import game from 'appkit/frootwars/game';

var FrootWarsView = Ember.View.extend({
  didInsertElement: function () {
      $('.gamelayer').hide();
      $('#gamestartscreen').show();
      var canvas = $('#gamecanvas')[0];
      game.init(canvas);
  }
});

export default FrootWarsView;