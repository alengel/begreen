define([
    'lib/backbone',
    'js/NavigationView',
    'js/IntroView'
    ], 
function(
    Backbone,
    NavigationView,
    IntroView
) {
    'use strict';

    var ContentView = Backbone.View.extend({
        
        className: 'ContentView',

        initialize: function(){
            this.nav = new NavigationView();
            this.introView = new IntroView();

            this.listenTo(this.nav, 'intro', this.renderIntroView);
            this.listenTo(this.nav, 'facts', this.renderFactsView);
            this.listenTo(this.nav, 'food', this.renderFoodView);
            this.listenTo(this.nav, 'house', this.renderHouseView);
            this.listenTo(this.nav, 'videos', this.renderVideosView);
            this.listenTo(this.nav, 'games', this.renderGamesView);
        }, 

        render: function(){
            this.$el.append(this.nav.$el);
            this.nav.render();

            this.renderIntroView();
        },

        renderIntroView: function(){
            this.$el.append(this.introView.$el); 
        },

        renderFactsView: function(){
            //To Do
        },

        renderFoodView: function(){
            //To Do
        },

        renderHouseView: function(){
            //To Do
        },

        renderVideosView: function(){
            //To Do
        },

        renderGamesView: function(){
            //To Do
        }
    });

    return ContentView;
});