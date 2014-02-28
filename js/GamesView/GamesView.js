define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var GamesView = Backbone.View.extend({
        
        className: 'Content GamesView',

        render: function(){
            var template =  '<div class="section-container games quiz"><span class="container-title">' +
                                '<i class="container-icon fa fa-question-circle fa-fw"></i>Test Your Greenness Quiz</span>' +
                            '</div>' +
                            '<div class="section-container games kids-zone"><span class="container-title">' +
                                '<i class="container-icon fa fa-puzzle-piece fa-fw"></i>Kids Zone</span>' +
                            '</div>';

            this.$el.html(template);
        }
    });

    return GamesView;
});