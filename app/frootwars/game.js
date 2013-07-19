var game = {

  isInitialized: false,

  init: function (canvas) {
    window.FrootWars = this;
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
  },

};

export default game;