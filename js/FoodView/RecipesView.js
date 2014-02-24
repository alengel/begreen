define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var RecipesView = Backbone.View.extend({
        
        className: 'RecipesView',

        initialize: function(){
            
        }, 

        render: function(){
            this.$el.html('Recipes');
        }
    });

    return RecipesView;
});