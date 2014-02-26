define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var SavingResourcesView = Backbone.View.extend({
        
        className: 'SavingResourcesView',

        render: function(){
            var template = '';

            this.$el.html(template);
        }
    });

    return SavingResourcesView;
});