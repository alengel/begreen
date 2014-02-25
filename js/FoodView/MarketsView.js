define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var MarketsView = Backbone.View.extend({
        
        className: 'MarketsView',

        render: function(){
            var template = '<section class="section left">' +
                                '<p class="section-title">Brighton Farm §</p>' +
                                '<p class="section-time"><i class="section-icon fa fa-clock-o"></i>Saturday 9.30am - 4.30pm & Wednesday 9am - 2pm</p>' +
                                '<a class="section-location" target="_blank" href="http://goo.gl/maps/3NgL7">' +
                                    '<i class="section-icon fa fa-crosshairs"></i>Open Map</a>' +
                                '<a class="section-info" target="_blank" href="http://goo.gl/h2TkGK">' + 
                                    '<i class="section-icon fa fa-file-o"></i>Visit Website</a>' +
                           '</section>' +
                           '<section class="section right">' +
                                '<p class="section-title">Florence Road Farmers\' Market</p>' +
                                '<p class="section-time"><i class="section-icon fa fa-clock-o"></i>Saturdays 10am - 2pm</p>' +
                                '<a class="section-location" target="_blank" href="http://goo.gl/maps/1dzbR">' +
                                    '<i class="section-icon fa fa-crosshairs"></i>Open Map</a>' +
                                '<a class="section-info" target="_blank" href="http://goo.gl/wAuWPo">' + 
                                    '<i class="section-icon fa fa-file-o"></i>Visit Website</a>' +
                           '</section>' +
                           '<section class="section left">' +
                                '<p class="section-title">Churchill Square Farmers\' Market</p>' +
                                '<p class="section-time"><i class="section-icon fa fa-clock-o"></i>Wednesdays 11am - 4pm</p>' +
                                '<a class="section-location" target="_blank" href="http://goo.gl/maps/n4o0R">' +
                                    '<i class="section-icon fa fa-crosshairs"></i>Open Map</a>' +
                                '<a class="section-info" target="_blank" href="http://goo.gl/MnVOKc">' + 
                                    '<i class="section-icon fa fa-file-o"></i>Visit Website</a>' +
                           '</section>' +
                           '<section class="section right">' +
                                '<p class="section-title">Open Market</p>' +
                                '<p class="section-time"><i class="section-icon fa fa-clock-o"></i>All week 9am - 6pm except Sunday</p>' +
                                '<a class="section-location" target="_blank" href="http://goo.gl/maps/BF5YS">' +
                                    '<i class="section-icon fa fa-crosshairs"></i>Open Map</a>' +
                                '<a class="section-info" target="_blank" href="http://goo.gl/L4ZUlO">' + 
                                    '<i class="section-icon fa fa-file-o"></i>Visit Website</a>' +
                           '</section>';

            this.$el.html(template);
        }
    });

    return MarketsView;
});