define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var CatchTheSquirrelView = Backbone.View.extend({
        
        className: 'CatchTheSquirrelView',

        render: function(){
            this.$el.html('CatchTheSquirrel');
        }
    });

    return CatchTheSquirrelView;
});