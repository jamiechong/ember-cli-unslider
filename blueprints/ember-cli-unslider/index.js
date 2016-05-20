/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies
  description: '',

  afterInstall: function(options) {
    return this.addBowerPackagesToProject([
      { name: 'jquery.event.move', target: '^1.3.6' }, 
      { name: 'unslider',          source: 'https://github.com/idiot/unslider.git#master' }
    ]);    
  }
};
