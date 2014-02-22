define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var HouseView = Backbone.View.extend({
        
        className: 'Content HouseView',

        initialize: function(){

        }, 

        render: function(){
            this.$el.html('House');
        }
    });

    return HouseView;
});