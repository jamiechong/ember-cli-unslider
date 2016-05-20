/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-unslider',
  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/jquery.event.move/js/jquery.event.move.js');
    app.import(app.bowerDirectory + '/unslider/src/js/unslider.js');
    app.import(app.bowerDirectory + '/unslider/dist/css/unslider.css');    
    app.import(app.bowerDirectory + '/unslider/dist/css/unslider-dots.css');    
  }
};
