"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,i,a){var r=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,r=t["default"].Application.extend({modulePrefix:a["default"].modulePrefix,podModulePrefix:a["default"].podModulePrefix,Resolver:n["default"]}),(0,i["default"])(r,a["default"].modulePrefix),e["default"]=r}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var i=n["default"].APP.name,a=n["default"].APP.version;e["default"]=t["default"].extend({version:a,name:i})}),define("dummy/components/un-slider",["exports","ember-cli-unslider/components/un-slider"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e["default"]={name:"App Version",initialize:(0,t["default"])(n["default"].APP.name,n["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e["default"]={name:"data-adapter",before:"store",initialize:t["default"].K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function i(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var i,a=n["default"].exportApplicationGlobal;i="string"==typeof a?a:t["default"].String.classify(n["default"].modulePrefix),window[i]||(window[i]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[i]}}))}}e.initialize=i,e["default"]={name:"export-application-global",initialize:i}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e["default"]={name:"injectStore",before:"store",initialize:t["default"].K}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e["default"]={name:"store",after:"ember-data",initialize:t["default"].K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e["default"]={name:"transforms",before:"store",initialize:t["default"].K}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e["default"]=t["default"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var i=t["default"].Router.extend({location:n["default"].locationType});i.map(function(){}),e["default"]=i}),define("dummy/routes/application",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({model:function(){return[{imageUrl:"https://placeholdit.imgix.net/~text?txtsize=33&txt=slide 1&w=600&h=400"},{imageUrl:"https://placeholdit.imgix.net/~text?txtsize=33&txt=slide 2&w=600&h=400"},{imageUrl:"https://placeholdit.imgix.net/~text?txtsize=33&txt=slide 3&w=600&h=400"}]}})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.5.1",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createElement("img");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var i=e.childAt(t,[1]),a=new Array(1);return a[0]=e.createAttrMorph(i,"src"),a},statements:[["attribute","src",["concat",[["get","slide.imageUrl",["loc",[null,[2,14],[2,28]]]]]]]],locals:["slide"],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.5.1",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var i=new Array(1);return i[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),i},statements:[["block","un-slider",[],["slides",["subexpr","@mut",[["get","model",["loc",[null,[1,20],[1,25]]]]],[],[]]],0,null,["loc",[null,[1,0],[3,14]]]]],locals:[],templates:[e]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",i=e["default"].$('meta[name="'+n+'"]').attr("content"),a=JSON.parse(unescape(i));return{"default":a}}catch(r){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-cli-unslider",version:"0.1.4+3a1e1517"});