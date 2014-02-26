define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var CleaningView = Backbone.View.extend({
        
        className: 'CleaningView',

        render: function(){
            var template = '<div class="house-section"></div>';

            this.$el.html(template);

           
        }
    });

    return CleaningView;
});