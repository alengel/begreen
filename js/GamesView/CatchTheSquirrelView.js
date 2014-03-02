define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var CatchTheSquirrelView = Backbone.View.extend({
        
        className: 'CatchTheSquirrelView',

        events: {
            'click .start-game' : 'startGame',
            'click .restart' : 'restartGame',
            'click .pause' : 'pauseGame',
            'click .squirrel.on' : 'catchSquirrel',
            'click .static' : 'onShowMoreSquirrels'
        },

        initialize: function(){
            this.score = 0;
            this.counter = 0;
            this.speed = 5000;
        },

        render: function(){
            var template = '<div class="image-container">' + 
                                '<div class="rolling-bg"></div>' +
                           '</div>' +
                           '<div class="score-container">' +
                                '<span>Caught </span>' +
                                '<span class="found">' + this.score + '</span>' +
                                '<span class="out-of"> squirrels so far! </span>' +
                                '<div class="squirrel-number">' +
                                    '<p>How many squirrels do you want to appear at the same time?</p>' +
                                    '<div class="squirrel static active default"></div>' + 
                                    '<div class="squirrel static active"></div>' + 
                                    '<div class="squirrel static active"></div>' + 
                                '</div>' +
                                '<div class="next-game restart">Start Again</div>' +
                                '<div class="next-game pause">Pause</div>' +
                           '</div>';

            this.$el.html(template);

            this.dropInStartGamePopup();
        },

        dropInStartGamePopup: function(){
            var that = this,
                popup = '<div class="popup winner">' +
                            '<span class="start-game-desc">Catch All The Squirrels! The game gets faster the longer you play.</span>' +
                            '<div class="next-game winner-button start-game">Start Game</div>' +
                        '</div>';
            this.$el.prepend(popup);

            _.delay(function(){
                that.$('.popup').addClass('after');
            }, 10);
        },

        startGame: function(){
            var $popup = this.$('.popup');
            
            if($popup.length){
                $popup.remove();
            }

            this.gameStarted = true;

            this.$('.rolling-bg').css('-webkit-animation', 'moveBG 1s linear infinite');
            this.showChosenSquirrels();
        },

        onShowMoreSquirrels: function(e){
            if($(e.target).hasClass('active') && !($(e.target).hasClass('default'))){
                $(e.target).removeClass('active').addClass('inactive');
                this.showChosenSquirrels();
                return;
            }

            $(e.target).removeClass('inactive').addClass('active');
            this.showChosenSquirrels();
        },

        showChosenSquirrels: function(){
            var that = this,
                squirrel = '<div class="squirrel on"></div>';

            this.displaySquirrels = [];
                
            _(this.$('.active')).each(function(){
                that.displaySquirrels.push(squirrel);
            });
            this.addSquirrel();            
        },

        addSquirrel: function(){
            var that = this,
                displaySquirrels,
                shownSquirrels = this.$('.squirrel.on');

            this.counter++;

            if(shownSquirrels){
                shownSquirrels.remove();
            }

            displaySquirrels = this.modifyDisplaySquirrelsCss();
            
            this.$('.image-container').append(displaySquirrels);

            window.squirrelTimeout = setTimeout(function(){
                that.addSquirrel();
            }, this.getDelay());
        },

        modifyDisplaySquirrelsCss: function(){
            var modifiedDisplaySquirrels = [];

            this.displaySquirrels.forEach(function(squirrel){
                var top = _.random(0, 75) + '%',
                    left = _.random(0, 89) + '%',
                    height = _.random(40, 130),
                    width = _.random(30, 100);

                squirrel = $(squirrel).css('top', top);
                squirrel = $(squirrel).css('left', left);
                squirrel = $(squirrel).css('height', height);
                squirrel = $(squirrel).css('width', width);

                modifiedDisplaySquirrels.push(squirrel);
            });

            return modifiedDisplaySquirrels;
        },

        getDelay: function(){
            var decrease = 50,
                delay = this.speed - (this.counter * decrease);

            if(delay === 100){
                return 100;
            }

            return delay;
        },

        catchSquirrel: function(e){
            e.target.remove();

            this.score++;
            this.$('.found').text(this.score);
        },

        pauseGame: function(e){
            var $button = $(e.target);
            if(!this.gameStarted && $button.text() === 'Continue'){
                this.$('.pause').text('Pause');
                this.startGame();   
                return;
            }
            
            $button.text('Continue');
            clearTimeout(window.squirrelTimeout);
            this.$('.rolling-bg').css('-webkit-animation', 'none');
            this.gameStarted = false; 
        },

        restartGame: function(){
            clearTimeout(window.squirrelTimeout);
            this.$('.image-container').empty();
            this.render();
        }
    });

    return CatchTheSquirrelView;
});