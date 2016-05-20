# ember-cli-unslider

An Ember component wrapper for the [jQuery unslider plugin](http://unslider.com/).

## Installation

* `ember install ember-cli-unslider`

## Usage

The `un-slider` component expects an array of slides. Within its block you must define the HTML content used for each slide.

```
{{#un-slider slides=model as |slide|}}
<img src="{{slide.url}}"/>
{{/un-slider}}
```

In the above example, `model` could look like this: 

```
    [
        { url: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=slide 1&w=600&h=400' }, 
        { url: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=slide 2&w=600&h=400' }, 
        { url: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=slide 3&w=600&h=400' }
    ];
```

The component accepts the same params that the unslider plugin uses (see their docs). Here is what's accepted:

```
  autoplay: false,
  speed: 750,
  delay: 300,
  index: 'first',
  keys: true,
  nav: true,
  arrows: true,
  animation: 'horizontal',
  selectors: {
    container: 'ul:first',
    slides: 'li',
  },
  animateHeight: false,
  activeClass: 'unslider-active',
  infinite: false,
```

An example using more params: 

```
    {{#un-slider slides=model nav=false dots=false infinite=true speed=200 keys=false as |slide|}}
        <img src="{{slide.image}}" alt="{{slide.alt}}">
    {{/un-slider}}

```