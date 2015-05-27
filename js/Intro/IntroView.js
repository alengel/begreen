define([
    'lib/backbone',
    'js/Intro/TreeView'
    ],
function(
    Backbone,
    TreeView
) {
    'use strict';

    var IntroView = Backbone.View.extend({

        className: 'Content IntroView',

        //intialise two TreeViews and hang of this view
        initialize: function(){
            this.leftTreeView = new TreeView();
            this.rightTreeView = new TreeView();
        },

        //render view and append template to DOM
        render: function(){
            var that = this,
                template = '<div class="progress-bar-container">' +
                                '<div class="progress-bar"</div>' +
                            '</div>' +
                            '<div class="growing-trees"></div>';

            this.$el.html(template);

            //start tree rendering and load progress bar
            this.renderTrees();
            this.loadProgressBar();
        },

        //append trees to DOM and render them
        renderTrees: function(){
            var that = this,
                containerWidth = this.$el.width();

            this.$el.append(this.leftTreeView.$el);
            this.$el.append(that.rightTreeView.$el);

            this.leftTreeView.render('left', containerWidth/3);

            //render the right tree 3 seconds later to artificially slow down the loading
            _.delay(function(){
                that.rightTreeView.render('right', (containerWidth/3) * 2);
            }, 3000);
        },

        //adds the CSS class .loading to the growing trees
        growTrees: function() {
            this.$('.growing-trees').addClass('loading');
        },

        //use delay to start the progress bar and the tree growth after 1 ms
        loadProgressBar: function(){
            var that = this;

            _.delay(function(){
                that.$('.progress-bar').addClass('loading');
                that.growTrees();
                that.showIntroPopup();
            }, 1);
        },

        //add the intro popup to the DOM after a 6.5 seconds delay
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

                //remove the progress bar when loaded
                that.$('.progress-bar-container').remove();
            }, 6501);

            //drops in the popup from the top
            _.delay(function(){
                that.$('.popup').addClass('after');
            }, 6505);
        }
    });

    return IntroView;
});