define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var BulkFoodsView = Backbone.View.extend({
        
        className: 'BulkFoodsView',

        //render view and append to DOM
        render: function(){
            var template = '<section class="section left">' +
                                '<p class="section-title">Hisbe</p>' +
                                '<p class="section-time"><i class="section-icon fa fa-clock-o"></i>Monday - Saturday 9am - 7.30pm & Sunday 10am - 4pm</p>' +
                                '<a class="section-location" target="_blank" href="http://goo.gl/maps/87Ue3">' +
                                    '<i class="section-icon fa fa-crosshairs"></i>Open Map</a>' +
                                '<a class="section-info" target="_blank" href="http://hisbe.co.uk/">' + 
                                    '<i class="section-icon fa fa-file-o"></i>Visit Website</a>' +
                           '</section>' +
                           '<section class="section right">' +
                                '<p class="section-title">Ecostream</p>' +
                                '<p class="section-time"><i class="section-icon fa fa-clock-o"></i>Monday - Friday 9am - 7pm & Weekends 10am - 5pm</p>' +
                                '<a class="section-location" target="_blank" href="http://goo.gl/maps/bqbG9">' +
                                    '<i class="section-icon fa fa-crosshairs"></i>Open Map</a>' +
                                '<a class="section-info" target="_blank" href="http://www.ecostreamstore.com/">' + 
                                    '<i class="section-icon fa fa-file-o"></i>Visit Website</a>' +
                           '</section>' +
                           '<section class="section left">' +
                                '<p class="section-title">Taj The Grocer</p>' +
                                '<p class="section-time"><i class="section-icon fa fa-clock-o"></i>Monday - Sunday 8.30am - 21.30pm</p>' +
                                '<a class="section-location" target="_blank" href="http://goo.gl/maps/Cu8B9">' +
                                    '<i class="section-icon fa fa-crosshairs"></i>Open Map</a>' +
                                '<a class="section-info" target="_blank" href="http://goo.gl/EX3Qk5">' + 
                                    '<i class="section-icon fa fa-file-o"></i>Visit Website</a>' +
                           '</section>' +
                           '<section class="section right">' +
                                '<p class="section-title">Infinity Foods Wholesale</p>' +
                                '<p class="section-time"><i class="section-icon fa fa-clock-o"></i>Monday - Friday 8.30am - 5pm</p>' +
                                '<span class="section-location">' +
                                    '<i class="section-icon fa fa-crosshairs"></i>Delivery Only</span>' +
                                '<a class="section-info" target="_blank" href="http://www.infinityfoodswholesale.co.uk/">' + 
                                    '<i class="section-icon fa fa-file-o"></i>Visit Website</a>' +
                           '</section>';

            this.$el.html(template);
        }
    });

    return BulkFoodsView;
});