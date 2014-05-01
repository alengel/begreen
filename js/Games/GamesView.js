define([
    'js/Games/QuizView',
    'js/Games/KidsZoneView',
    'lib/backbone'
    ], 
function(
    QuizView,
    KidsZoneView,
    Backbone
) {
    'use strict';

    var GamesView = Backbone.View.extend({
        
        className: 'Content GamesView',

        //listening to events
        events: {
            'click .quiz' : 'renderQuizView',
            'click .kids-zone' : 'renderKidsZone'
        },

        //render view and append template to DOM
        render: function(){
            var template =  '<div class="section-container games quiz"><span class="container-title">' +
                                '<i class="container-icon fa fa-question-circle fa-fw"></i>Test Your Greenness!</span>' +
                            '</div>' +
                            '<div class="section-container games kids-zone"><span class="container-title">' +
                                '<i class="container-icon fa fa-puzzle-piece fa-fw"></i>Kids Zone</span>' +
                            '</div>';

            this.$el.html(template);
        },

        //initialise QuizView, append template to DOM and render view
        renderQuizView: function(){
            this.quizView = new QuizView();

            this.$el.html(this.quizView.$el);
            this.quizView.render();
        },

        //initialise KidsZoneView, append template to DOM and render view
        renderKidsZone: function(){
            this.kidsZoneView = new KidsZoneView();

            this.$el.html(this.kidsZoneView.$el);
            this.kidsZoneView.render();
        },

        //remove child views and view itself
        remove: function(){
            if(this.kidsZoneView){
                this.kidsZoneView.remove();
            }

            if(this.quizView){
                this.quizView.remove();
            }

            Backbone.View.prototype.remove.call(this);
        }
    });

    return GamesView;
});