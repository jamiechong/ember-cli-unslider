import Ember from 'ember';
import layout from '../templates/components/un-slider';

export default Ember.Component.extend({
  layout,

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
  /**
   * we actually don't want to allow the user to specify
   * the selectors because our template assumes ul:first li.
   * selectors: {
   *   container: 'ul:first',
   *   slides: 'li',
   * },
   */
  animateHeight: false,
  activeClass: 'unslider-active',
  infinite: true,

  // Internal private
  _attrsUpdated: true,       // for first load set to true
  _slideIndex: 0,

  // Public
  slideIndex: Ember.computed.readOnly('_slideIndex'),

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

  updateSlideIndex(event, index, /* slide */) {
    this.set('_slideIndex', index);
  },

  didRender() {
    this._super(...arguments);

    // We build the the component everytime its attrs change.
    if (this.get('_attrsUpdated')) {
      // Unslider itself wraps the element we pass to it, which in this case is our component wrapper (ember-view).
      // To keep things contained, we add our own container (see the template), which is wrapped by unslider.
      /**
       * we actually don't want to allow the user to specify
       * the selectors because our template assumes ul:first li.
       * therefore, it's not included in slider options
       */
      const sliderOptions = this.getProperties(
        'autoplay', 'speed', 'delay', 'index', 'keys', 'nav', 'arrows',
        'animation', 'animateHeight', 'activeClass', 'infinite'
      );
      this.$().find('.unslider-container')
        .unslider(sliderOptions)
        .unslider('destroySwipe')
        .unslider('initSwipe')
        .on('unslider.change', this.updateSlideIndex.bind(this))
        .on('unslider.ready', this.updateSlideIndex.bind(this));

      this.set('_attrsUpdated', false);
    }
  },

  willDestroyElement() {
    this._super(...arguments);
    this._cleanup();
  }

});
