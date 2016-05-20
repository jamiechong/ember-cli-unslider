import Ember from 'ember';
import layout from '../templates/components/un-slider';

export default Ember.Component.extend({
  layout: layout,


  classNames: ['un-slider-component'],

  // Unslider options and settings taken straight from http://unslider.com/
  // Note that the infinite option seems to be missing from their documentation. 

  autoplay: false,
  speed: 400,
  delay: 300,
  index: 'first',
  keys: true,
  nav: true,
  arrows: true,
  animation: 'horizontal',
  // selectors: {               // we actually don't want to allow the user to specify the selectors because our template assumes ul:first li. 
  //   container: 'ul:first',
  //   slides: 'li',
  // },
  animateHeight: false,
  activeClass: 'unslider-active',
  infinite: true,

  // Internal private
  _attrsUpdated: true,       // for first load set to true

  _cleanup() {
    // We're about to trash the inner DOM behind unslider's/jQuery's back. Let's remove all
    // listeners and handlers and cleanup the DOM so unslider is ready to rebuild the component from
    // a clean DOM state. 
    this.$().find('*').off();
    this.$().find('.unslider-container').unwrap();
    this.$().find('.unslider-arrow, .unslider-nav').remove();
    this.set('_attrsUpdated', true);
  },

  didUpdateAttrs() {
    this._super(...arguments);
    this._cleanup();
  },

  didRender() {
    this._super(...arguments);

    // We build the the component everytime its attrs change.
    if (this.get('_attrsUpdated')) {
      // Unslider itself wraps the element we pass to it, which in this case is our component wrapper (ember-view).
      // To keep things contained, we add our own container (see the template), which is wrapped by unslider. 
      this.$().find('.unslider-container').unslider({
        autoplay: this.get('autoplay'),
        speed: this.get('speed'),
        delay: this.get('delay'),
        index: this.get('index'),
        keys: this.get('keys'),
        nav: this.get('nav'),
        arrows: this.get('arrows'),
        animation: this.get('animation'),
        // selectors: this.get('selectors'),      // we actually don't want to allow the user to specify the selectors because our template assumes ul:first li. 
        animateHeight: this.get('animateHeight'),
        activeClass: this.get('activeClass'),
        infinite: this.get('infinite')
      }).unslider('destroySwipe').unslider('initSwipe');

      this.set('_attrsUpdated', false);
    }
  },

  willDestroyElement() {
    this._super(...arguments);
    this._cleanup();
  }

});
