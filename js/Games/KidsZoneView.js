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
            this.renderSubview(SpotTheDifferenceView);

            this.$('.catch').removeClass('active');
            this.$('.spot').addClass('active');
        },

        renderCatch: function(){
            this.renderSubview(CatchTheSquirrelView);

            this.$('.spot').removeClass('active');
            this.$('.catch').addClass('active');
        },

        renderSubview: function(ViewClass){
            if(this.subView){
                this.removeSubview();
            }

            this.subView = new ViewClass();

            this.$('.kids-game-content').html(this.subView.$el);
            this.subView.render();
        },

        removeSubview: function(){
            this.subView.remove();
            this.subView = undefined;
        },

        remove: function(){
            this.removeSubview();
            
            Backbone.View.prototype.remove.call(this);
        }
    });

    return KidsZoneView;
});