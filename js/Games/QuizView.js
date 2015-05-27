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
            },
            {
                'q': 'The Open Market is open every day.',
                'a': 'False',
                'la': 'The Open Market is not open on Sundays.' 
            },
            {
                'q': 'Infinity Foods Wholesale has a shop in Brighton.',
                'a': 'False',
                'la': 'They only deliver, they don\'t have a shop.' 
            },
            {
                'q': 'A leaky toilet can waste 200 gallons a day.',
                'a': 'True',
                'la': 'Best to get them fixed right away.' 
            },
            {
                'q': 'The mantra is reduce, reuse, recycle.',
                'a': 'False',
                'la': 'It is refuse, reduce, reuse, recylce, rot.' 
            },
            {
                'q': 'The story of stuff is about the chain of products.',
                'a': 'True',
                'la': 'It is the life cycle of a product.' 
            },
            {
                'q': 'The materials economy is a song by Madonna.',
                'a': 'False',
                'la': 'It is the chain of products from extraction to production and disposal.' 
            },
            {
                'q': 'CO2 emissions are good.',
                'a': 'False',
                'la': 'They contribute to global warming.' 
            }
        ],
        answers = {
            'yes': 'Yes, you\'re right. ',
            'no': 'Not quite. '
        },
        winningLevels = [
            'Excellent!',
            'Well Done.',
            'Maybe Better Next Time.'
        ];

    var QuizView = Backbone.View.extend({
        
        className: 'QuizView',

        //listening to events
        events: {
            'click .answer-button' : 'onAnswerClick',
            'click .continue-button' : 'onContinue',
            'click .winner-button' : 'playAgain'
        },

        //initialise view with default views
        initialize: function(){
            this.score = 0;
            this.questionsAnswered = 1;
        },

        //render view and append template to DOM
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
                                    '<div class="button answer-button true">True</div>' +
                                    '<div class="button answer-button false">False</div>' +
                                '</div>' +
                                '<p class="q-answer">Answer</p>' +
                                '<div class="box answer"></div>' +
                                '<div class="button continue-button disabled">Continue</div>' +
                            '</div>' +
                            '<div class="quiz-score-container">' +
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

        //return a random question from the hash and set text in DOM
        chooseRandomQuestion: function(){
            this.questions = _.shuffle(questions);
            this.current = _.random(0, questions.length-1);

            this.$('.question').text(this.questions[this.current].q);
        },

        //check answer based on selection
        onAnswerClick: function(e){
            //if already selected, return 
            if($(e.target).hasClass('selected')){
                return;
            }

            //add CSS class disabled to false button if true selected
            if(!this.answered){
                if($(e.target).hasClass('true')){
                    this.$('.false').addClass('disabled');
                } else {
                    this.$('.true').addClass('disabled');
                }
                this.answered = true;
            }

            this.checkAnswer($(e.target));
        },

        //check answer in the questions hash
        checkAnswer: function($target){
            //if target is disabled and already answered, return
            if($target.hasClass('disabled') && this.answered){
                return;
            }

            //enable continue button
            $target.addClass('selected');
            this.$('.continue-button').removeClass('disabled');

            //if the answer matches the correct answer, build a user-friendly answer
            //increase score and counter
            if($target.text() === this.questions[this.current].a){
                this.$('.answer').text(answers.yes + this.questions[this.current].la);
                this.score++;
                this.increaseCounter();
                return;
            }

            //if answer doesn't match, build user friendly answer and increase counter only
            this.$('.answer').text(answers.no + this.questions[this.current].la);
            this.increaseCounter();
        },

        //increase counter and score
        increaseCounter: function(){
            this.questionsAnswered++;
            
            //when all questions are answered, increase score for the last time and finish quiz
            if(this.questionsAnswered > this.questions.length){
                this.increaseScore();
                this.finishQuiz();
                return;
            }

            this.increaseScore();
        },

        //update DOM with score and increase meter
        increaseScore: function(){
            this.$('.current-score').text(this.score);
            this.increaseMeter();
        },

        //update meter with new CSS width
        increaseMeter: function(){
            var meter = this.$('.inside-meter'),
                containerWidth = this.$('.meter').width(),
                width = (containerWidth/this.questions.length ) * this.score;
            
            meter.css('width', width);
        },

        //choose next question on continue button
        onContinue: function(e) {
            //if continue is disabled, return
            if($(e.target).hasClass('disabled')){
                return; 
            }

            //choose next question, update DOM and clear answer related DOM
            this.chooseNextQuestion();
            this.$('.answer').text('');
            this.$('.true, .false').removeClass('disabled selected');
            this.answered = false;
        },

        //disable continue button, update counter, show next question in DOM
        chooseNextQuestion: function(){
            this.$('.continue-button').addClass('disabled');

            this.$('.count').text(this.questionsAnswered);
            this.current++;
            
            if(this.current > questions.length-1){
                this.current = 0;
            }

            this.$('.question').text(this.questions[this.current].q);
        },

        //alert winner 
        finishQuiz: function(){
            this.finishedQuiz = true;
            this.$('.button').addClass('disabled');
            this.alertWinner();
        },

        //prepend popup to DOM and add CSS class to drop in popup after 10ms
        alertWinner: function(){
            var that = this,
                popup = '<div class="popup winner">' +
                            '<p><i class="fa fa-trophy winner-icon"></i>' + 
                            this.determineWinningLevel() + ' You knew ' + this.score + ' of ' + questions.length + ' questions.</p>' +
                            '<div class="button winner-button">Play Again?</div>' +
                        '</div>';
            this.$el.prepend(popup);

            _.delay(function(){
                that.$('.popup').addClass('after');
            }, 10);
        },

        //display winning message based on level of competence
        determineWinningLevel: function(){
            if(this.score <= questions.length/3){
                return winningLevels[2];
            }

            if(this.score > questions.length/3 && this.score <= questions.length/3 * 2){
                return winningLevels[1];
            }

            if(this.score > questions.length/3 * 2){
                return winningLevels[0];
            }
        },

        //reset quiz and render view
        playAgain: function(){
            this.score = 0;
            this.questionsAnswered = 1;
            this.answered = false;

            this.render();
        }
    });

    return QuizView;
});