define([
    'lib/backbone',
    'js/NavigationView',
    'js/IntroView/IntroView',
    'js/FactsView',
    'js/FoodView/FoodView',
    'js/HouseView/HouseView',
    'js/VideosView',
    'js/GamesView/GamesView'
    ], 
function(
    Backbone,
    NavigationView,
    IntroView,
    FactsView,
    FoodView,
    HouseView,
    VideosView,
    GamesView
) {
    'use strict';

    var ContentView = Backbone.View.extend({
        
        className: 'ContentView',

        initialize: function(){
            this.nav = new NavigationView();
            

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

            // Temporary for development - remove when finished
            this.renderIntroView();
        },

        renderIntroView: function(){
            this.renderView('introView', IntroView);
        },

        renderFactsView: function(){
            this.renderView('factsView', FactsView);
        },

        renderFoodView: function(){
            this.renderView('foodView', FoodView);
        },

        renderHouseView: function(){
            this.renderView('houseView', HouseView);
        },

        renderVideosView: function(){
            this.renderView('videosView', VideosView);
        },

        renderGamesView: function(){
            this.renderView('gamesView', GamesView);
        },

        renderView: function(view, ClassName){
            if(this.previousView){
                this.previousView.remove();
            }

            view = new ClassName();
            this.$el.append(view.$el);
            view.render();

            this.previousView = view;
        }
    });

    return ContentView;
});