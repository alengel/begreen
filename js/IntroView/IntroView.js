define([
    'lib/backbone',
    'js/IntroView/TreeView'
    ], 
function(
    Backbone,
    TreeView
) {
    'use strict';

    var IntroView = Backbone.View.extend({
        
        className: 'Content IntroView',

        initialize: function(){
            this.leftTreeView = new TreeView();
            this.rightTreeView = new TreeView();
        },

        render: function(){
            var that = this,
                template = '<div class="progress-bar-container">' +
                                '<div class="progress-bar"</div>' +
                            '</div>' +
                            '<div class="growing-trees"></div>';

            this.$el.html(template);
            this.renderTrees();
            this.loadProgressBar();
        },

        renderTrees: function(){
            this.$el.append(this.leftTreeView.$el);
            this.leftTreeView.render('left', 150, 610);

            this.$el.append(this.rightTreeView.$el);
            this.rightTreeView.render('right', 500, 610);
        },

        growTrees: function() {
            this.$('.growing-trees').addClass('loading');
        },

        loadProgressBar: function(){
            var that = this;

            _.delay(function(){
                that.$('.progress-bar').addClass('loading');
                that.growTrees();
                that.showIntroPopup();
            }, 1);
        },

        showIntroPopup: function(){
            var that = this;

            _.delay(function(){
                var popup = '<div class="intro-popup">' +
                                '<h2><i class="fa fa-leaf intro-icon"></i>Welcome To Be Green</h2>' +
                                '<p>This platform offers some advice on green living in Brighton.</p>' +
                                '<p>However, it is not all serious - some games are waiting for you if you are up for it.</p>' +
                                '<p>Use the navigation on the left to move around.</p>' +
                            '</div>';
                that.$el.prepend(popup);

                that.$('.progress-bar-container').remove();
            }, 15001);

            _.delay(function(){
                that.$('.intro-popup').addClass('after');
            }, 15005);
        }
    });

    return IntroView;
});