define([
    'lib/backbone',
    'lib/jquery.film_roll'
    ], 
function(
    Backbone
) {
    'use strict';

    var VideosView = Backbone.View.extend({
        
        className: 'Content VideosView',

        render: function(){
            var template = '<div class="video-carousel">' +
                                '<div class="video-single"><iframe width="560" height="315" src="http://www.youtube.com/embed/WfGMYdalClU" frameborder="0"></iframe></div>' +
                                '<div class="video-single"><iframe width="560" height="315" src="http://www.youtube.com/embed/zORv8wwiadQ" frameborder="0"></iframe></div>' +
                                '<div class="video-single"><iframe width="560" height="315" src="http://player.vimeo.com/video/1709110" frameborder="0"></iframe></div>' +
                                '<div class="video-single"><iframe width="560" height="315" src="http://www.youtube.com/embed/9GorqroigqM" frameborder="0"></iframe></div>' +
                                '<div class="video-single"><iframe width="560" height="315" src="http://www.youtube.com/embed/cpkRvc-sOKk" frameborder="0"></iframe></div>' +
                           '</div>' +
                           '<span class="video-intro">Inspirational Videos to raise awareness. Click one to play.</span>';

            this.$el.html(template);

            this.createCarousel();
        },

        createCarousel: function(){
            var film_roll = new FilmRoll({
                configure_load: true,
                container: this.$('.video-carousel'),
                scroll: false
            });
        }
    });

    return VideosView;
});