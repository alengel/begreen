define([
    'lib/backbone',
    'js/Facts/FactsModel',
    'lib/jvectormap/jquery-jvectormap-1.2.2.min',
    'lib/jvectormap/jquery-jvectormap-world-mill-en'   
], 
function(
    Backbone,
    FactsModel
) {
    'use strict';

    var FactsView = Backbone.View.extend({
        
        className: 'Content FactsView',

        initialize: function(){
            this.model = new FactsModel();
        }, 

        render: function(){
            this.$el.html('<header class="kids-header"><i class="header-icon fa fa-globe fa-fw"></i><h2>CO2 Emissions Worldwide<h2></header>' +
                          '<div class="map-container"></div>');
            
            this.createMap();
        },

        createMap: function(){
            var that = this;

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
                },
                onRegionClick: function(e, code){
                    that.showPopup(code);
                }
            });
        },

        showPopup: function(code){
            var data = this.model.getData(),
                countries = this.model.getCountries();

            var country = _.findWhere(countries, {alpha2: code});

            var countryData = _.findWhere(data, {ISO: country.alpha3});
            console.log(countryData);
        }
    });

    return FactsView;
});