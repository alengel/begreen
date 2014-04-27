define([
    'lib/backbone',
    'lib/highcharts-3d'
], 
function(
    Backbone
) {
    'use strict';

    var CountryChartView = Backbone.View.extend({
        
        className: 'Content CountryChartView',

        initialize: function(options){
            this.country = options.country;
        },

        render: function(){
            this.$el.html('<div class="bar-chart"></div>');

            $('.bar-chart').highcharts({
                chart: {
                    backgroundColor: 'transparent',
                    margin: 75,
                    options3d: {
                        enabled: true,
                        alpha: 10,
                        beta: 25,
                        depth: 70
                    },
                    type: 'column'
                },
                colors: ['rgb(31, 166, 122)'],
                credits: {
                    enabled: false
                },
                legend: {
                    itemStyle: {
                        color: '#FFFFFF'
                    },
                    itemHoverStyle: {
                        color: '#FFFFFF',
                        cursor: 'default'
                    }
                },
                plotOptions: {
                    allowPointSelect: false,
                    column: {
                        depth: 35,
                        events: {
                            legendItemClick: function () {
                                return false; 
                            }
                        }
                    }
                },
                title: {
                    style: {
                        color: '#FFFFFF'
                    },
                    text: 'CO2 emissions over the years'
                },
                xAxis: {
                    categories: this.getCategories(),
                    labels: {
                        style: {
                            color: '#FFFFFF'
                        }
                    }
                },
                yAxis: {
                    labels: {
                        style: {
                            color: '#FFFFFF'
                        }
                    },
                    opposite: true,
                    title: {
                        text: null
                    }
                },
                series: [{
                    name: 'metric tons per capita',
                    data: this.getSeriesData()
                }]
            });
        },

        getCategories: function(){
            return _.keys(this.country.data);
        },

        getSeriesData: function(){
            return _.values(this.country.data);
        }   
    });

    return CountryChartView;
});