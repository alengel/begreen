requirejs.config({
  shim: {
    'lib/backbone': {
      deps: ['lib/underscore', 'lib/jquery'],
      exports: 'Backbone'
    },
    'lib/underscore': {
      exports: '_'
    },
    'lib/jquery': {
      exports: '$'
    }
  }
});

define([
    //3rd party libraries
    'lib/jquery',
    'lib/underscore',
    'lib/backbone',
    //application js files
    'js/HeaderView',
    'js/ContentView'
    ], 
function(
    jQuery,
    _,
    Backbone,
    HeaderView,
    ContentView
) {
    'use strict';

    var AppView = Backbone.View.extend({

        className: 'App',

        initialize: function(){
            this.header = new HeaderView();
            this.mainContent = new ContentView();

            this.render();
        },

        render: function(){
            this.$el.append(this.header.$el);
            this.$el.append(this.mainContent.$el);

            $('body').append(this.$el);

            this.header.render();
            this.mainContent.render();
        }
    });

    var App = new AppView();
});