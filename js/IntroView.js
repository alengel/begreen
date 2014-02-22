define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var IntroView = Backbone.View.extend({
        
        className: 'Content IntroView',

        initialize: function(){
            
        },

        render: function(){
            this.$el.html('<div>LALALA</div>');
        }
    });

    return IntroView;
});