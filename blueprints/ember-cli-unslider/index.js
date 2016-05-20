/*jshint node:true*/
module.exports = {
  description: ''

  afterInstall: function(options) {

    return this.addBowerPackagesToProject([{
      name: 'jquery.event.move',
      target: '^1.3.6'
    }, {
      name: 'unslider',
      target: 'https://github.com/idiot/unslider.git#master'
    }]);    
  }
};
