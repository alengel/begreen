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
            'click .active' : 'onShowMoreSquirrels',
            'click .inactive' : 'onShowMoreSquirrels',
            'click .volume' : 'onAdjustVolume'
        },

        initialize: function(){
            this.score = 0;
            this.counter = 0;
            this.speed = 5000;

            this.volumeOn = true;
            this.bgSound = new Audio('sound/squirrel.wav');
            this.popSound = new Audio('sound/pop.mp3');
        },

        render: function(){
            var template = '<div class="image-container">' + 
                                '<div class="rolling-bg"></div>' +
                           '</div>' +
                           '<div class="score-container">' +
                                '<span>Caught </span>' +
                                '<span class="found">' + this.score + '</span>' +
                                '<span class="out-of"> squirrels so far! </span>' +
                                '<div class="squirrel-number hidden">' +
                                    '<p>How many squirrels do you want to appear at the same time?</p>' +
                                    '<div class="squirrel-count default"></div>' + 
                                    '<div class="squirrel-count active"></div>' + 
                                    '<div class="squirrel-count active"></div>' + 
                                '</div>' +
                                '<div class="button restart hidden">Start Again</div>' +
                                '<div class="button pause hidden">Pause</div>' +
                           '</div>' +
                           '<div class="audio-container">' +
                               '<i class="fa fa-music fa-3x"></i>' +
                               '<i class="volume fa fa-volume-up fa-3x"></i>' +
                           '</div>';

            this.$el.html(template);

            this.dropInStartGamePopup();
        },

        dropInStartGamePopup: function(){
            var that = this,
                popup = '<div class="popup winner">' +
                            '<p class="start-game-desc">Catch All The Squirrels! The game gets faster the longer you play.</p>' +
                            '<p class="start-game-desc">Warning! This game never ends!</p>' +
                            '<div class="button winner-button start-game">Start Game</div>' +
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

            this.$('.pause').removeClass('hidden');
            this.$('.squirrel-number').removeClass('hidden');
            this.$('.rolling-bg').css('-webkit-animation', 'moveBG 5s linear infinite');
            
            this.gameStarted = true;
            this.showMoreSquirrels();

            this.playBackgroundMusic();
        },

        onShowMoreSquirrels: function(e){
            if($(e.target).hasClass('active')){
                $(e.target).removeClass('active').addClass('inactive');
                this.showMoreSquirrels();
                return;
            }

            $(e.target).removeClass('inactive').addClass('active');
            this.showMoreSquirrels();
        },

        showMoreSquirrels: function(){
            var that = this,
                squirrel = '<div class="squirrel on"></div>';

            this.displaySquirrels = [squirrel];
                
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
            if(window.clearTimeout){
                clearTimeout(window.squirrelTimeout);
            }

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
            var decrease = 100,
                delay = this.speed - (this.counter * decrease);

            if(delay === 100){
                return 100;
            }

            return delay;
        },

        catchSquirrel: function(e){
            e.target.remove();

            this.score++;

            if(this.volumeOn){
                this.popSound.play();
            }

            this.$('.found').text(this.score);
        },

        pauseGame: function(e){
            var $button = $(e.target);
            if(!this.gameStarted && $button.text() === 'Continue'){
                this.$('.pause').text('Pause');
                this.startGame();
                this.playAudio();   
                return;
            }
            
            $button.text('Continue');
            this.$('.squirrel.on').remove();
            clearTimeout(window.squirrelTimeout);

            this.$('.rolling-bg').css('-webkit-animation', 'none');
            this.gameStarted = false;

            this.pauseAudio(); 
        },

        restartGame: function(){
            this.score = 0;
            this.counter = 0;
            this.speed = 5000;
            
            clearTimeout(window.squirrelTimeout);

            this.$('.image-container').empty();
            this.render();
        },

        playBackgroundMusic: function(){
            this.bgSound.volume = 0.3;
            
            if (typeof this.bgSound.loop == 'boolean') {
                this.bgSound.loop = true;
            }
            else {
                this.bgSound.addEventListener('ended', function() {
                    this.currentTime = 0;
                    this.play();
                }, false);
            }
            
            this.playAudio();
        },

        pauseAudio: function(){
            this.bgSound.pause();
        },

        playAudio: function(){
            if(this.volumeOn){
                this.bgSound.play();
            }
        },

        onAdjustVolume: function(){
            if(this.$('.volume').hasClass('fa-volume-up')){
                this.$('.volume').removeClass('fa-volume-up').addClass('fa-volume-off');
                this.volumeOn = false;
                this.pauseAudio();
                return;
            }
            
            this.$('.volume').removeClass('fa-volume-off').addClass('fa-volume-up');
            this.volumeOn = true;
            
            if(this.gameStarted){
                this.playAudio();
            }
        }
    });

    return CatchTheSquirrelView;
});