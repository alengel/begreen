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

        //initialise view with default options
        initialize: function(options){
            this.country = options.country;
        },

        //render view and append highchart to DOM
        render: function(){
            this.$el.html('<div class="bar-chart"></div>');

            //set options on highcharts
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

        //get categories (the years on x-axis) from country.data
        getCategories: function(){
            return _.keys(this.country.data);
        },

        //get series (the co2 emissions on y-axis) from country.data
        getSeriesData: function(){
            return _.values(this.country.data);
        }   
    });

    return CountryChartView;
});