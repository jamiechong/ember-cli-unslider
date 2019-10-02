import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | un slider', function(hooks) {
  setupRenderingTest(hooks);

  function _renderSlides(slides, nav, arrows) {
    if (!slides) {
      slides = [{
        url: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=slide 1&w=600&h=400'
      }, {
        url: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=slide 2&w=600&h=400'
      }, {
        url: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=slide 3&w=600&h=400'      
      }];
    }

    this.set('model', slides);
    this.set('nav', nav);
    this.set('arrows', arrows);

    this.render(hbs`
      {{#un-slider slides=model nav=nav arrows=arrows as |slide|}}
        <img src="{{slide.url}}"/>
      {{/un-slider}}
    `);
  }


  test('empty is empty', async function(assert) {
    await render(hbs`{{un-slider}}`);
    assert.equal(find('*').textContent.trim(), '');

    _renderSlides.call(this, []);
    assert.equal(find('*').textContent.trim(), '');
  });

  test('slides render', function(assert) {
    _renderSlides.call(this);

    assert.equal(this.$().find('.unslider-container').find('li').not('.unslider-clone').length, 3);
  });

  test('dots and arrows', function(assert) {
    _renderSlides.call(this, null, true, true);  

    //dots
    assert.equal(this.$().find('.unslider-nav li').length, 3);

    // arrows
    assert.equal(this.$().find('.unslider-arrow').length, 2);
  });

  test('no dots', function(assert) {
    _renderSlides.call(this, null, false, true);  
    //dots
    assert.equal(this.$().find('.unslider-nav li').length, 0);
  });

  test('no arrows', function(assert) {
    _renderSlides.call(this, null, true, false);  
    assert.equal(this.$().find('.unslider-arrow').length, 0);
  });
});