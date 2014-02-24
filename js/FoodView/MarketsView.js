define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var MarketsView = Backbone.View.extend({
        
        className: 'MarketsView',

        initialize: function(){
            
        }, 

        render: function(){
            this.$el.html('Markets');
        }
    });

    return MarketsView;
});