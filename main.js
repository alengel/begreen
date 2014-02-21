define([
    //3rd party libraries
    'lib/jquery',
    'lib/underscore',
    'lib/backbone',
    //application js files
    'js/navigation'
    ], 
function(
    $,
    _,
    Backbone,
    Navigation
) {
    'use strict';

    var AppView = Backbone.View.extend({
        initialize: function(){
            var nav = new Navigation();
        }
    });

    var App = new AppView();
});