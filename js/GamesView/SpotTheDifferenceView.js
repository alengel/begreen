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
            'click .winner-button' : 'playAgain'
        },

        initialize: function(){
            this.scoreBoard = [];
        },

        render: function(){
            var template = '<div class="image-container">' + 
                                '<div class="pic image-original"></div>' + 
                                '<div class="pic-divider"></div>' +
                                '<div class="pic image-false"></div>' +
                           '</div>' +
                           '<div class="score-container">' +
                                '<p>Click where you see a difference.</p>' +
                                '<span>Already found </span>' +
                                '<span class="found">0</span>' +
                                '<span class="out-of"> / </span>' +
                                '<span class="total">5</span>' +
                                '<div class="next-game">Try Another</div>' +
                           '</div>';

            this.$el.html(template);

            this.addAllDifferences();
        },

        addAllDifferences: function(){
            var differences = '<div class="diff1 score-point"></div>' +
                              '<div class="diff2 score-point"></div>' +
                              '<div class="diff3 score-point"></div>' +
                              '<div class="diff4 score-point"></div>' +
                              '<div class="diff5 score-point"></div>';

            this.$('.image-false').append(differences);
        },

        addPoint: function(e){
            var item = e.target.classList[0];

            if(_(this.scoreBoard).contains(item)){
                return;
            }

            this.scoreBoard.push(item);
            this.$('.' + item).css('opacity', '1');

            this.$('.found').text(this.scoreBoard.length);

            if(this.scoreBoard.length === 5){
                this.alertWinner();
            }            
        },

        alertWinner: function(){
            var that = this,
                popup = '<div class="popup winner">' +
                            '<h2><i class="fa fa-trophy winner-icon"></i>You Won!</h2>' +
                            '<div class="next-game winner-button">Play Again?</div>' +
                        '</div>';
            this.$el.prepend(popup);

            _.delay(function(){
                that.$('.popup').addClass('after');
            }, 10);
        },

        playAgain: function(){
            this.render();
        }
    });

    return SpotTheDifferenceView;
});