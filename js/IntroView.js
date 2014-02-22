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
            this.$el.append('LALALA');
        }
    });

    return IntroView;
});