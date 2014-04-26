define([
    'lib/backbone',
    'lib/jvectormap/jquery-jvectormap-1.2.2.min',
    'lib/jvectormap/jquery-jvectormap-world-mill-en'   
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
            this.$el.html('<div class="map-container"></div>');
            
            this.createMap();
        },

        createMap: function(){
            $('.map-container').vectorMap({
                backgroundColor: 'transparent',
                regionStyle: {
                    initial: {
                        fill: '#5D5D5D',
                        'fill-opacity': 1,
                        stroke: 'none',
                        'stroke-width': 0,
                        'stroke-opacity': 1
                    },
                    hover: {
                        fill: 'rgb(0, 102, 77)',
                        'fill-opacity': 0.8
                    }
                }
            });
        }
    });

    return FactsView;
});