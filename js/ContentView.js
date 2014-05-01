define([
    'lib/backbone',
    'js/NavigationView',
    'js/Intro/IntroView',
    'js/Facts/FactsView',
    'js/Food/FoodView',
    'js/House/HouseView',
    'js/VideosView',
    'js/Games/GamesView'
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

        //initalises the view and listens to events from the navigation
        initialize: function(){
            this.nav = new NavigationView();


            this.listenTo(this.nav, 'intro', this.renderIntroView);
            this.listenTo(this.nav, 'facts', this.renderFactsView);
            this.listenTo(this.nav, 'food', this.renderFoodView);
            this.listenTo(this.nav, 'house', this.renderHouseView);
            this.listenTo(this.nav, 'videos', this.renderVideosView);
            this.listenTo(this.nav, 'games', this.renderGamesView);
        },

        //renders the view and appends the navigation to the DOM
        render: function(){
            this.$el.append(this.nav.$el);
            this.nav.render();
        },

        //render the intro view into the DOM
        renderIntroView: function(){
            this.renderView('introView', IntroView);
        },

        //render the facts view into the DOM
        renderFactsView: function(){
            this.renderView('factsView', FactsView);
        },

        //render the food view into the DOM
        renderFoodView: function(){
            this.renderView('foodView', FoodView);
        },

        //render the house view into the DOM
        renderHouseView: function(){
            this.renderView('houseView', HouseView);
        },

        //render the videos view into the DOM
        renderVideosView: function(){
            this.renderView('videosView', VideosView);
        },

        //render the games view into the DOM
        renderGamesView: function(){
            this.renderView('gamesView', GamesView);
        },

        //helper function that initialises and renders the passed in view
        renderView: function(view, ViewClass){
            if(this.previousView){
                this.previousView.remove();
            }

            view = new ViewClass();
            this.$el.append(view.$el);
            view.render();

            this.previousView = view;
        }
    });

    return ContentView;
});