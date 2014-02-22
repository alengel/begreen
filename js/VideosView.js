define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var VideosView = Backbone.View.extend({
        
        className: 'Content VideosView',

        initialize: function(){

        }, 

        render: function(){
            this.$el.html('Videos');
        }
    });

    return VideosView;
});