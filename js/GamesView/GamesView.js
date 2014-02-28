define([
    'js/GamesView/QuizView',
    'js/GamesView/KidsZoneView',
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

        events: {
            'click .quiz' : 'renderQuizView',
            'click .kids-zone' : 'renderKidsZone'
        },

        render: function(){
            var template =  '<div class="section-container games quiz"><span class="container-title">' +
                                '<i class="container-icon fa fa-question-circle fa-fw"></i>Test Your Greenness Quiz</span>' +
                            '</div>' +
                            '<div class="section-container games kids-zone"><span class="container-title">' +
                                '<i class="container-icon fa fa-puzzle-piece fa-fw"></i>Kids Zone</span>' +
                            '</div>';

            this.$el.html(template);
        },

        renderQuizView: function(){
            var quizView = new QuizView();

            this.$el.html(quizView.$el);
            quizView.render();
        },

        renderKidsZone: function(){
            var kidsZoneView = new KidsZoneView();

            this.$el.html(kidsZoneView.$el);
            kidsZoneView.render();
        }
    });

    return GamesView;
});