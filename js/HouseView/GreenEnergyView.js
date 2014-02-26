define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var GreenEnergyView = Backbone.View.extend({
        
        className: 'GreenEnergyView',

        render: function(){
            var template = '<section class="section small left">' +
                                '<p class="section-title">Ecotricity</p>' +
                                '<i class="section-icon fa fa-star"></i>' +
                                '<a class="section-info" target="_blank" href="http://www.ecotricity.co.uk/">' + 
                                    '<i class="section-icon fa fa-file-o"></i>Visit Website</a>' +
                           '</section>';

            this.$el.html(template);
        }
    });

    return GreenEnergyView;
});