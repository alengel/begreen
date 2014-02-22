define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var HeaderView = Backbone.View.extend({
        
        className: 'HeaderView',

        initialize: function(){
        }, 

        render: function(){
            this.$el.append('<header class="header"></header>'); 
        }
    });

    return HeaderView;
});