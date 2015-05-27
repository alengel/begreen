define([
    'lib/backbone',
    'js/Facts/FactsModel',
    'js/ModalView',
    'lib/jvectormap/jquery-jvectormap-1.2.2.min',
    'lib/jvectormap/jquery-jvectormap-world-mill-en',
    'lib/highcharts'
], 
function(
    Backbone,
    FactsModel,
    ModalView
) {
    'use strict';

    var FactsView = Backbone.View.extend({
        
        className: 'Content FactsView',

        //initialise view with model
        initialize: function(){
            this.model = new FactsModel();
        }, 

        //append template to DOM and create map
        render: function(){
            var template = '<header class="kids-header">' +
                                '<i class="header-icon fa fa-globe fa-fw"></i>' + 
                                '<h2>CO2 Emissions Worldwide<h2></header>' +
                          '<div class="map-container"></div>'
            this.$el.html(template);
            
            this.createMap();
        },

        //create jvectormap map with passed in options
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
                //open popup on country click
                onRegionClick: function(e, code){
                    that.showPopup(code);
                }
            });
        },

        //render modal with passed in options
        showPopup: function(code){
            //remove modal before rendering another
            if(this.modalView){
                this.modalView.remove();
            }

            //get data from model, map alpha2 to alpha3 ISO country code
            var data = this.model.getData(),
                countries = this.model.getCountries(),
                country = _.findWhere(countries, {alpha2: code}),
                countryData = _.findWhere(data, {ISO: country.alpha3});

            //initialise modal with passed in options, append to DOM, render modal
            this.modalView = new ModalView({section: country.name, country: countryData});
            this.$el.append(this.modalView.$el);
            this.modalView.render();
        }
    });

    return FactsView;
});