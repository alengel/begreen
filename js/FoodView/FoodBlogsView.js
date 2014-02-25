define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var FoodBlogsView = Backbone.View.extend({
        
        className: 'FoodBlogsView',

        render: function(){
            var template = '<section class="section left">' +
                                '<p class="market-title">Hisbe</p>' +
                                '<p class="market-time"><i class="section-icon fa fa-clock-o"></i>Monday - Saturday 9am - 7.30pm & Sunday 10am - 4pm</p>' +
                                '<a class="market-location" target="_blank" href="http://goo.gl/maps/87Ue3">' +
                                    '<i class="section-icon fa fa-crosshairs"></i>Open Map</a>' +
                                '<a class="market-info" target="_blank" href="http://hisbe.co.uk/">' + 
                                    '<i class="section-icon fa fa-file-o"></i>Visit Website</a>' +
                           '</section>' +
                           '<section class="section right">' +
                                '<p class="market-title">Ecostream</p>' +
                                '<p class="market-time"><i class="section-icon fa fa-clock-o"></i>Monday - Friday 9am - 7pm & Weekends 10am - 5pm</p>' +
                                '<a class="market-location" target="_blank" href="http://goo.gl/maps/bqbG9">' +
                                    '<i class="section-icon fa fa-crosshairs"></i>Open Map</a>' +
                                '<a class="market-info" target="_blank" href="http://www.ecostreamstore.com/">' + 
                                    '<i class="section-icon fa fa-file-o"></i>Visit Website</a>' +
                           '</section>' +
                           '<section class="section left">' +
                                '<p class="market-title">Taj The Grocer</p>' +
                                '<p class="market-time"><i class="section-icon fa fa-clock-o"></i>Monday - Sunday 8.30am - 21.30pm</p>' +
                                '<a class="market-location" target="_blank" href="http://goo.gl/maps/Cu8B9">' +
                                    '<i class="section-icon fa fa-crosshairs"></i>Open Map</a>' +
                                '<a class="market-info" target="_blank" href="http://goo.gl/EX3Qk5">' + 
                                    '<i class="section-icon fa fa-file-o"></i>Visit Website</a>' +
                           '</section>' +
                           '<section class="section right">' +
                                '<p class="market-title">Inifinty Foods Wholesale</p>' +
                                '<p class="market-time"><i class="section-icon fa fa-clock-o"></i>Monday - Friday 8.30am - 5pm</p>' +
                                '<span class="market-location">' +
                                    '<i class="section-icon fa fa-crosshairs"></i>Delivery Only</span>' +
                                '<a class="market-info" target="_blank" href="http://www.infinityfoodswholesale.co.uk/">' + 
                                    '<i class="section-icon fa fa-file-o"></i>Visit Website</a>' +
                           '</section>';

            this.$el.html(template);
        }
    });

    return FoodBlogsView;
});