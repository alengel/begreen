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
            var that = this,
                containerWidth = this.$el.width();

            this.$el.append(this.leftTreeView.$el);
            this.$el.append(that.rightTreeView.$el);

            this.leftTreeView.render('left', containerWidth/3);

            _.delay(function(){
                that.rightTreeView.render('right', (containerWidth/3) * 2);
            }, 3000);
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
                var popup = '<div class="popup">' +
                                '<h2><i class="fa fa-leaf intro-icon"></i>Welcome To Be Green</h2>' +
                                '<p>This platform offers some advice on green living in Brighton.</p>' +
                                '<p>However, it is not all serious - some games are waiting for you if you are up for it.</p>' +
                                '<p>Use the navigation on the left to move around.</p>' +
                            '</div>';
                that.$el.prepend(popup);

                that.$('.progress-bar-container').remove();
            }, 6501);

            _.delay(function(){
                that.$('.popup').addClass('after');
            }, 6505);
        }
    });

    return IntroView;
});