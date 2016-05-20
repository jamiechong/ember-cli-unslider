import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      imageUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=slide 1&w=600&h=400'
    }, {
      imageUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=slide 2&w=600&h=400'
    }, {
      imageUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=slide 3&w=600&h=400'      
    }];
  }
});
