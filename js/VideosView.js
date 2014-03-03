define([
    'lib/backbone',
    'lib/jquery.film_roll'
    ], 
function(
    Backbone
) {
    'use strict';

    var videos = [
        'http://player.vimeo.com/video/1709110',
        'http://www.youtube.com/embed/WfGMYdalClU',
        'http://www.youtube.com/embed/zORv8wwiadQ',
        'http://www.youtube.com/embed/9GorqroigqM',
        'http://www.youtube.com/embed/cpkRvc-sOKk'
    ];

    var VideosView = Backbone.View.extend({
        
        className: 'Content VideosView',

        render: function(){
            var that = this,
                template = '<div class="video-carousel"></div>' +
                           '<span class="video-intro">Inspirational Videos to raise awareness. Click one to play.</span>';
            
            this.$el.html(template);

            videos.forEach(function(video, i){
                var videoSettings = 'width="560" height="315" frameborder="0"',
                    videoTemplate = '<div class="video-single">' + 
                                        '<i class="spinner-icon fa fa-refresh fa-spin"></i>' + 
                                        '<iframe class="video-iframe" src="' + videos[i] + '"' + videoSettings + '></iframe>' +
                                    '</div>';
                
                that.$('.video-carousel').append(videoTemplate);

                $('.video-iframe').load(function() {
                    that.$('.spinner-icon').remove();
                });
            });

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