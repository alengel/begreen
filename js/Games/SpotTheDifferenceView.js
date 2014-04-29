define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var SpotTheDifferenceView = Backbone.View.extend({
        
        className: 'SpotTheDifferenceView',

        events: {
            'click .score-point' : 'addPoint',
            'click .winner-button' : 'playAgain',
            'click .try-another': 'tryAnother',
            'click .with-sound': 'onWrongLocation',
            'click .volume' : 'onAdjustVolume'
        },

        initialize: function(){
            this.scoreBoard = [];
            this.chooseRandomGame();

            this.volumeOn = true;
            this.failSound = new Audio('sound/fail.wav');
            this.successSound = new Audio('sound/success.mp3');
        },

        render: function(){
            var template = '<div class="image-container">' + 
                                '<div class="pic image-original-' + this.game +'">' +
                                    '<p class="original-title">Original</p>' +
                                '</div>' + 
                                '<div class="pic-divider"></div>' +
                                '<div class="pic with-sound image-false-' + this.game + '"></div>' +
                           '</div>' +
                           '<div class="score-container">' +
                                '<p>Click where you see a difference.</p>' +
                                '<span>Already found </span>' +
                                '<span class="found">0</span>' +
                                '<span class="out-of"> / </span>' +
                                '<span class="total"></span>' +
                                '<div class="button try-another">Try Another</div>' +
                           '</div>' + 
                           '<div class="audio-container">' +
                               '<i class="fa fa-music fa-3x"></i>' +
                               '<i class="volume fa fa-volume-up fa-3x"></i>' +
                           '</div>';

            this.$el.html(template);

            this.addAllDifferences();
        },

        chooseRandomGame: function(){
            this.game = _.random(1, 3);
        },

        addAllDifferences: function(){
            var differences = '<div class="diff1 pic' + this.game + ' score-point"></div>' +
                              '<div class="diff2 pic' + this.game + ' score-point"></div>' +
                              '<div class="diff3 pic' + this.game + ' score-point"></div>' +
                              '<div class="diff4 pic' + this.game + ' score-point"></div>' +
                              '<div class="diff5 pic' + this.game + ' score-point"></div>';

            this.$('.total').text('5');
            this.$('.image-false-' + this.game).append(differences);
        },

        addPoint: function(e){
            var item = e.target.classList[0];

            if(_(this.scoreBoard).contains(item)){
                return;
            }

            this.scoreBoard.push(item);
            this.$('.' + item).css('opacity', '1');

            if(this.volumeOn){
                this.successSound.play();
            }

            this.$('.found').text(this.scoreBoard.length);

            if(this.scoreBoard.length === 5){
                this.alertWinner();
            }            
        },

        onWrongLocation: function(e){
            if($(e.target).hasClass('score-point')){
                return;
            }

            if(this.volumeOn){
                this.failSound.play();
            }
        },

        alertWinner: function(){
            var that = this,
                popup = '<div class="popup winner">' +
                            '<h2><i class="fa fa-trophy winner-icon"></i>You Won!</h2>' +
                            '<div class="button winner-button">Play Again?</div>' +
                        '</div>';
            this.$el.prepend(popup);

            _.delay(function(){
                that.$('.popup').addClass('after');
            }, 10);
        },

        playAgain: function(){
            this.tryAnother();
            this.render();
        },

        tryAnother: function(){
            this.game += 1;

            if(this.game === 4){
                this.game = 1;
            }

            this.render();
        },

        onAdjustVolume: function(){
            if(this.$('.volume').hasClass('fa-volume-up')){
                this.$('.volume').removeClass('fa-volume-up').addClass('fa-volume-off');
                this.volumeOn = false;
                return;
            }
            
            this.$('.volume').removeClass('fa-volume-off').addClass('fa-volume-up');
            this.volumeOn = true;
        }
    });

    return SpotTheDifferenceView;
});