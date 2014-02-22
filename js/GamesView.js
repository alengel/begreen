define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var GamesView = Backbone.View.extend({
        
        className: 'Content GamesView',

        initialize: function(){

        }, 

        render: function(){
            this.$el.html('Games');
        }
    });

    return GamesView;
});