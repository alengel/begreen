define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var GreenEnergyView = Backbone.View.extend({
        
        className: 'GreenEnergyView',

        //render view and append template to DOM
        render: function(){
            var template = '<section class="section small left">' +
                                '<p class="section-title"><img class="company-logo ecotricity"></img>Ecotricity</p>' +
                                '<a class="section-info" target="_blank" href="http://www.ecotricity.co.uk/">' + 
                                    '<i class="section-icon fa fa-file-o"></i>Visit Website</a>' +
                           '</section>' +
                           '<section class="section small right">' +
                                '<p class="section-title"><img class="company-logo good-energy"></img>Good Energy</p>' +
                                '<a class="section-info" target="_blank" href="http://www.goodenergy.co.uk/">' + 
                                    '<i class="section-icon fa fa-file-o"></i>Visit Website</a>' +
                           '</section>' +
                           '<section class="section small left">' +
                                '<p class="section-title"><img class="company-logo green-energy"></img>Green Energy</p>' +
                                '<a class="section-info" target="_blank" href="http://www.greenenergy.uk.com/">' + 
                                    '<i class="section-icon fa fa-file-o"></i>Visit Website</a>' +
                           '</section>' +
                           '<section class="section small right">' +
                                '<p class="section-title"><img class="company-logo woodland"></img>Woodland Trust Energy</p>' +
                                '<a class="section-info" target="_blank" href="http://www.woodlandtrustenergy.com/">' + 
                                    '<i class="section-icon fa fa-file-o"></i>Visit Website</a>' +
                           '</section>';

            this.$el.html(template);
        }
    });

    return GreenEnergyView;
});