# ember-cli-unslider

[![Build Status](https://travis-ci.org/jamiechong/ember-cli-unslider.svg?branch=master)](https://travis-ci.org/jamiechong/ember-cli-unslider)

An Ember component wrapper for the jQuery Unslider plugin.

## Description

This addon provides the `{{un-slider}}` component, which uses [Unslider](http://unslider.com/). It comes with built in touch/swipe support and lets you fully customize the design of your slider.

See the [simple demo](http://jamiechong.github.io/ember-cli-unslider/).

## Installation

`ember install ember-cli-unslider`

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


The component accepts the same params that the unslider plugin uses. See the [unslider docs](http://unslider.com/) for a more detailed description of each param. The defaults are listed below:

```
autoplay: false
speed: 400
delay: 300
index: 'first'
keys: true
nav: true
arrows: true
animation: 'horizontal'
animateHeight: false
activeClass: 'unslider-active'
infinite: true
```


An example using more params: 

```
{{#un-slider slides=model nav=false dots=false infinite=true speed=200 keys=false as |slide|}}
    <img src="{{slide.image}}" alt="{{slide.alt}}">
{{/un-slider}}

```


## Support

This addon has been minimally tested with all of unslider's possible param combinations. If you find an issue, please report it on GitHub.