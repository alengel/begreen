define([
    'lib/backbone'
],
function(
    Backbone
) {
    'use strict';

    var CatchTheSquirrelView = Backbone.View.extend({

        className: 'CatchTheSquirrelView',

        //listening to events
        events: {
            'click .start-game' : 'startGame',
            'click .restart' : 'restartGame',
            'click .pause' : 'pauseGame',
            'click .squirrel.on' : 'catchSquirrel',
            'click .active' : 'onShowMoreSquirrels',
            'click .inactive' : 'onShowMoreSquirrels',
            'click .volume' : 'onAdjustVolume'
        },

        //initialise view and set default values, load audio
        initialize: function(){
            this.score = 0;
            this.counter = 0;
            this.speed = 5000;

            this.volumeOn = true;
            this.bgSound = new Audio('sound/squirrel.wav');
            this.popSound = new Audio('sound/pop.mp3');
        },

        //render view and append template to DOM
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

        //adds popup to the DOM and adds CSS class after 10ms to make it drop in from the top
        dropInStartGamePopup: function(){
            var that = this,
                popup = '<div class="popup winner">' +
                            '<h2><i class="fa fa-puzzle-piece intro-icon"></i>Catch All The Squirrels!</h2>' +
                            '<span class="start-game-desc">Warning! This game gets faster the longer you play and never ends.</span>' +
                            '<div class="button winner-button start-game">Start Game</div>' +
                        '</div>';
            this.$el.prepend(popup);

            _.delay(function(){
                that.$('.popup').addClass('after');
            }, 10);
        },

        //starts the game after button is clicked
        startGame: function(){
            var $popup = this.$('.popup');

            //remove popup from DOM
            if($popup.length){
                $popup.remove();
            }

            //show pause button, options to choose number of squirrels and start background transition
            this.$('.pause').removeClass('hidden');
            this.$('.squirrel-number').removeClass('hidden');
            this.$('.rolling-bg').css('-webkit-animation', 'moveBG 5s linear infinite');

            this.gameStarted = true;
            //work out how many squirrels should show
            this.showMoreSquirrels();

            //start playing the game tune
            this.playBackgroundMusic();
        },

        //toggle CSS class to show how many squirrels will show in game
        onShowMoreSquirrels: function(e){
            if($(e.target).hasClass('active')){
                $(e.target).removeClass('active').addClass('inactive');
                this.showMoreSquirrels();
                return;
            }

            $(e.target).removeClass('inactive').addClass('active');
            this.showMoreSquirrels();
        },

        //create squirrels and add to array
        showMoreSquirrels: function(){
            var that = this,
                squirrel = '<div class="squirrel on"></div>';

            //always show at least one squirrel
            this.displaySquirrels = [squirrel];

            _(this.$('.active')).each(function(){
                that.displaySquirrels.push(squirrel);
            });
            this.addSquirrel();
        },

        //add squirrel array to DOM
        addSquirrel: function(){
            var that = this,
                displaySquirrels,
                shownSquirrels = this.$('.squirrel.on');

            this.counter++;

            //clear timeout to avoid memory leak
            if(window.clearTimeout){
                clearTimeout(window.squirrelTimeout);
            }

            //if squirrels already in DOM, remove first
            if(shownSquirrels){
                shownSquirrels.remove();
            }

            //change size of squirrel
            displaySquirrels = this.modifyDisplaySquirrelsCss();

            //append squirrel array to DOM in one go
            this.$('.image-container').append(displaySquirrels);

            //indefinite loop with a decreasing delay - will start adding squirrels faster and faster
            window.squirrelTimeout = setTimeout(function(){
                that.addSquirrel();
            }, this.getDelay());
        },

        //modify the squirrels size and their position on screen at random
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

        //decrease delay by 100ms every time getDelay gets called
        getDelay: function(){
            var decrease = 100,
                delay = this.speed - (this.counter * decrease);

            //stop delay at 100ms - the fastest the game will get
            if(delay === 100){
                return 100;
            }

            return delay;
        },

        //add score point, play sound effect and update score in DOM
        catchSquirrel: function(e){
            e.target.remove();

            this.score++;

            if(this.volumeOn){
                this.popSound.play();
            }

            this.$('.found').text(this.score);
        },

        //pause game, audio and update button text
        pauseGame: function(e){
            var $button = $(e.target);

            //if game is already paused, continue game, audio and update button text
            if(!this.gameStarted && $button.text() === 'Continue'){
                this.$('.pause').text('Pause');
                this.startGame();
                this.playAudio();
                return;
            }

            //Update button text, remove squirrels from view, clear timeout
            $button.text('Continue');
            this.$('.squirrel.on').remove();
            clearTimeout(window.squirrelTimeout);

            //stop the rolling background
            this.$('.rolling-bg').css('-webkit-animation', 'none');
            this.gameStarted = false;

            this.pauseAudio();
        },

        //reset game stats, clear timeouts and re-render game
        restartGame: function(){
            this.score = 0;
            this.counter = 0;
            this.speed = 5000;

            clearTimeout(window.squirrelTimeout);

            this.$('.image-container').empty();
            this.render();
        },

        //loop background sound and play audio
        playBackgroundMusic: function(){
            this.bgSound.volume = 0.3;

            //modern browsers support loop
            if (typeof this.bgSound.loop == 'boolean') {
                this.bgSound.loop = true;
            }
            //graceful fallback for non-supporting browsers
            else {
                this.bgSound.addEventListener('ended', function() {
                    this.currentTime = 0;
                    this.play();
                }, false);
            }

            this.playAudio();
        },

        //pause audio
        pauseAudio: function(){
            this.bgSound.pause();
        },

        //play audio if user hasn't disabled audio
        playAudio: function(){
            if(this.volumeOn){
                this.bgSound.play();
            }
        },

        //enables or disables audio and toggles volume icon
        onAdjustVolume: function(){
            if(this.$('.volume').hasClass('fa-volume-up')){
                this.$('.volume').removeClass('fa-volume-up').addClass('fa-volume-off');
                this.volumeOn = false;
                this.pauseAudio();
                return;
            }

            this.$('.volume').removeClass('fa-volume-off').addClass('fa-volume-up');
            this.volumeOn = true;

            //only play audio if game has started
            if(this.gameStarted){
                this.playAudio();
            }
        },

        //turn off audio and remove view
        remove: function(){
            this.pauseAudio();
            this.bgSound = 0;

            Backbone.View.prototype.remove.call(this);
        }
    });

    return CatchTheSquirrelView;
});