var game = {

  isInitialized: false,

  init: function () {
    this._attachToDom();
  },

  _attachToDom: function () {
      console.log('FrootWars: Attaching to DOM...')

      // Hide all game layers and display the start screen
      $('.gamelayer').hide();
      $('#gamestartscreen').show();

      // Get handler for game canvas and context
      this.canvas = $('#gamecanvas')[0];
      this.context = this.canvas.getContext('2d');

      // aliasing game for browser
      window.FrootWars = game;

      console.log('FrootWars: Attached to DOM...')
  }

};

export default game;