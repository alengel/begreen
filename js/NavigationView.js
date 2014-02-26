define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var NavigationView = Backbone.View.extend({
        
        className: 'NavigationView',

        events:{
            'click .item-intro' : 'introClicked',
            'click .item-facts' : 'factsClicked',
            'click .item-food' : 'foodClicked',
            'click .item-house' : 'houseClicked',
            'click .item-videos' : 'videosClicked',
            'click .item-games' : 'gamesClicked'
        },

        render: function(){
            var template = '<aside class="nav">' +
                                '<ul class="nav-list">' +
                                    '<li class="item-container item-intro">' +
                                        '<i class="nav-icon fa fa-info-circle fa-fw"></i>' +
                                        '<a class="nav-item">Intro</a>' +
                                    '</li>' +
                                    '<li class="item-container item-facts">' +
                                        '<i class="nav-icon fa fa-globe fa-fw"></i>' +
                                        '<a class="nav-item">Facts</a>' +
                                    '</li>' +
                                    '<li class="item-container item-food">' +
                                        '<i class="nav-icon fa fa-cutlery fa-fw"></i>' +
                                        '<a class="nav-item">Food</a>' +
                                    '</li>' +
                                    '<li class="item-container item-house">' +
                                        '<i class="nav-icon fa fa-home fa-fw"></i>' +
                                        '<a class="nav-item">House</a>' +
                                    '</li>' +
                                    '<li class="item-container item-videos">' +
                                        '<i class="nav-icon fa fa-video-camera fa-fw"></i>' +
                                        '<a class="nav-item">Videos</a>' +
                                    '</li>' +
                                    '<li class="item-container item-games">' +
                                        '<i class="nav-icon fa fa-gamepad fa-fw"></i>' +
                                        '<a class="nav-item">Games</a>' +
                                    '</li>' +
                                '</ul>' +
                            '</aside>';


            this.$el.append(template);
            this.introClicked(); 
        },

        onIntroClicked:function(e){
            e.preventDefault();
            this.introClicked();
        },

        introClicked: function(){
            this.trigger('intro');
            this.toggleActiveClass('intro');
        },

        factsClicked: function(e){
            e.preventDefault();
            this.trigger('facts');
            this.toggleActiveClass('facts');
        },

        foodClicked: function(e){
            e.preventDefault();
            this.trigger('food');
            this.toggleActiveClass('food');
        },

        houseClicked: function(e){
            e.preventDefault();
            this.trigger('house');
            this.toggleActiveClass('house');
        },

        videosClicked: function(e){
            e.preventDefault();
            this.trigger('videos');
            this.toggleActiveClass('videos');
        },

        gamesClicked: function(e){
            e.preventDefault();
            this.trigger('games');
            this.toggleActiveClass('games');
        },

        toggleActiveClass: function(tab){
            var item = '.item-' + tab;

            this.$('.item-container').removeClass('active');
            this.$(item).addClass('active');
        }
    });

    return NavigationView;
});