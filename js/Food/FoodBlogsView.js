define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var FoodBlogsView = Backbone.View.extend({
        
        className: 'FoodBlogsView',

        //render view and append to DOM
        render: function(){
            var template = '<section class="section small left">' +
                                '<p class="section-title">Zero Waste Home Recipes</p>' +
                                '<a class="section-info" target="_blank" href="http://goo.gl/lXmdQv">' + 
                                    '<i class="section-icon fa fa-file-o"></i>Visit Website</a>' +
                           '</section>' +
                           '<section class="section small right">' +
                                '<p class="section-title">Deliciously Organic</p>' +
                                '<a class="section-info" target="_blank" href="http://deliciouslyorganic.net/">' + 
                                    '<i class="section-icon fa fa-file-o"></i>Visit Website</a>' +
                           '</section>' +
                           '<section class="section small left">' +
                                '<p class="section-title">Easy Peasy Organic</p>' +
                                '<a class="section-info" target="_blank" href="http://www.easypeasyorganic.com/">' + 
                                    '<i class="section-icon fa fa-file-o"></i>Visit Website</a>' +
                           '</section>' +
                           '<section class="section small right">' +
                                '<p class="section-title">The Organic Food Blog</p>' +
                                '<a class="section-info" target="_blank" href="http://www.organicangels.com/blog/">' + 
                                    '<i class="section-icon fa fa-file-o"></i>Visit Website</a>' +
                           '</section>' +
                           '<section class="section small left">' +
                                '<p class="section-title">Planet Organic</p>' +
                                '<a class="section-info" target="_blank" href="http://www.planetorganic.com/blog/">' + 
                                    '<i class="section-icon fa fa-file-o"></i>Visit Website</a>' +
                           '</section>' +
                           '<section class="section small right">' +
                                '<p class="section-title">Organaholic</p>' +
                                '<a class="section-info" target="_blank" href="http://organaholic.com/">' + 
                                    '<i class="section-icon fa fa-file-o"></i>Visit Website</a>' +
                           '</section>';

            this.$el.html(template);
        }
    });

    return FoodBlogsView;
});