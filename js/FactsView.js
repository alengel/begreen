define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var FactsView = Backbone.View.extend({
        
        className: 'Content FactsView',

        initialize: function(){

        }, 

        render: function(){
            this.$el.append('Facts');
        }
    });

    return FactsView;
});