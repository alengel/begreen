define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var FoodBlogsView = Backbone.View.extend({
        
        className: 'FoodBlogsView',

        initialize: function(){
            
        }, 

        render: function(){
            this.$el.html('Food Blogs');
        }
    });

    return FoodBlogsView;
});