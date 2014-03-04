define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var questions = [
            {
                'q': 'Baking soda is a "green" cleaning product.',
                'a': 'True',
                'la': 'Baking soda can be used to clean the entire house.' 
            },
            {
                'q': 'Yoghurt cups can be recycled in Brighton.',
                'a': 'False',
                'la': 'Unfortunately Brighton council only recycles plastic bottles.' 
            },
            {
                'q': 'There is a farmers market in Florence Rd.',
                'a': 'True',
                'la': 'There\'s a lovely market every Saturday.' 
            }
        ],
        answers = {
            'yes': 'Yes, that\'s right. ',
            'no': 'Not quite. '
        };

    var QuizView = Backbone.View.extend({
        
        className: 'QuizView',

        events: {
            'click .true' : 'onTrueClick',
            'click .false' : 'onFalseClick',
            'click .continue-button' : 'onContinue',
            'click .winner-button' : 'playAgain'
        },

        initialize: function(){
            this.score = 0;
            this.questionsAnswered = 1;
        },

        render: function(){
            var template =  '<header class="kids-header">' +
                                '<i class="header-icon fa fa-question-circle fa-fw"></i>' + 
                                '<h2>Test Your Greenness!<h2>' +
                            '</header>' +
                            '<div class="question-container">' +
                                '<p class="q-count">Question ' + 
                                    '<span class="count">' + this.questionsAnswered + '</span> / ' + questions.length + 
                                '</p>' +
                                '<div class="box question"></div>' +
                                '<div class="button-container">' +
                                    '<div class="button true">True</div>' +
                                    '<div class="button false">False</div>' +
                                '</div>' +
                                '<p class="q-answer">Answer</p>' +
                                '<div class="box answer"></div>' +
                                '<div class="button continue-button disabled">Continue</div>' +
                            '</div>' +
                            '<div class="score-container">' +
                                '<div class="score">' +
                                    '<p>Score</p>' +
                                    '<span class="current-score">0</span>' +
                                    '<span> / </span>' +
                                    '<span>' + questions.length + '</span>' +
                                '</div>' +
                                '<div class="meter-container">' +
                                    '<div class="meter-title">Greenness Meter</div>' +
                                    '<div class="meter">' + 
                                        '<div class="inside-meter"></div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>';

            this.$el.html(template);

            this.chooseRandomQuestion();
        },

        chooseRandomQuestion: function(){
            this.current = _.random(0, 2);
            this.$('.question').text(questions[this.current].q);
        },

        onTrueClick: function(e){
            if(!this.answered && !$(e.target).hasClass('selected')){
                this.$('.false').addClass('disabled');
                this.answered = true;
            }

            this.checkAnswer($(e.target));
        },

        onFalseClick: function(e){
            if(!this.answered && !$(e.target).hasClass('selected')){
                this.$('.true').addClass('disabled');
                this.answered = true;
            }
            
            this.checkAnswer($(e.target));
        },

        checkAnswer: function($target){
            if($target.hasClass('disabled') && this.answered){
                return;
            }

            $target.addClass('selected');
            this.$('.continue-button').removeClass('disabled');

            if($target.text() === questions[this.current].a){
                this.$('.answer').text(answers.yes + questions[this.current].la);
                this.score++;
                this.increaseCounter();
                return;
            }
            this.$('.answer').text(answers.no + questions[this.current].la);
            this.increaseCounter();
        },

        increaseCounter: function(){
            this.questionsAnswered++;
            if(this.questionsAnswered > questions.length){
                this.increaseScore();
                this.finishQuiz();
                return;
            }

            this.increaseScore();
        },

        increaseScore: function(){
            this.$('.current-score').text(this.score);
            this.increaseMeter();
        },

        increaseMeter: function(){
            var meter = this.$('.inside-meter'),
                containerWidth = this.$('.meter').width(),
                width = (containerWidth/questions.length )* this.score;
            
            meter.css('width', width);
        },

        onContinue: function(e) {
            if($(e.target).hasClass('disabled')){
                return; 
            }

            this.chooseNextQuestion();
            this.$('.answer').text('');
            this.$('.true, .false').removeClass('disabled selected');
            this.answered = false;
        },

        chooseNextQuestion: function(){
            this.$('.count').text(this.questionsAnswered);
            this.current++;
            if(this.current > questions.length-1){
                this.current = 0;
            }

            this.$('.question').text(questions[this.current].q);
        },

        finishQuiz: function(){
            this.finishedQuiz = true;
            this.$('.button').addClass('disabled');
            this.alertWinner();
        },

        alertWinner: function(){
            var that = this,
                popup = '<div class="popup winner">' +
                            '<p><i class="fa fa-trophy winner-icon"></i>' + 
                            'Well done! You knew ' + this.score + ' of ' + questions.length + ' questions.</p>' +
                            '<div class="button winner-button">Play Again?</div>' +
                        '</div>';
            this.$el.prepend(popup);

            _.delay(function(){
                that.$('.popup').addClass('after');
            }, 10);
        },

        playAgain: function(){
            this.score = 0;
            this.questionsAnswered = 1;
            this.answered = false;

            this.render();
        }
    });

    return QuizView;
});