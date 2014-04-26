define([
    'js/Games/SpotTheDifferenceView',
    'js/Games/CatchTheSquirrelView',
    'lib/backbone'
    ], 
function(
    SpotTheDifferenceView,
    CatchTheSquirrelView,
    Backbone
) {
    'use strict';

    var KidsZoneView = Backbone.View.extend({
        
        className: 'KidsZoneView',

        events: {
            'click .spot' : 'renderSpot',
            'click .catch' : 'renderCatch'
        },

        render: function(){
            var template = '<header class="kids-header"><i class="header-icon fa fa-puzzle-piece fa-fw"></i><h2>Kids Zone<h2></header>' +
                           '<div class="kids-game-content"></div>' + 
                           '<div class="kids-nav">' + 
                                '<div class="kids-nav-item spot">Spot The Difference</div>' +
                                '<div class="kids-nav-item catch">Catch The Squirrel</div>' +
                           '</div>';

            this.$el.html(template);

            this.renderSpot();
        },

        renderSpot: function(){
            var spotTheDifferenceView = new SpotTheDifferenceView();

            this.$('.kids-game-content').html(spotTheDifferenceView.$el);
            spotTheDifferenceView.render();

            this.$('.catch').removeClass('active');
            this.$('.spot').addClass('active');
        },

        renderCatch: function(){
            var catchTheSquirrelView = new CatchTheSquirrelView();

            this.$('.kids-game-content').html(catchTheSquirrelView.$el);
            catchTheSquirrelView.render();

            this.$('.spot').removeClass('active');
            this.$('.catch').addClass('active');
        }
    });

    return KidsZoneView;
});