define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var FoodView = Backbone.View.extend({
        
        className: 'Content FoodView',

        initialize: function(){

        }, 

        render: function(){
            this.$el.html('Food');
        }
    });

    return FoodView;
});