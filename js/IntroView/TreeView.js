define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    function randomRange (min, max) {
        return Math.random() * (max - min) + min;
    }

    var TreeView = Backbone.View.extend({
        
        className: 'TreeView',

        initialize: function(){
        }, 

        render: function(location, translateWidth, translateHeight){
            var template = '<div class="tree-' + location + '"></div>';

            this.$el.html(template); 

            this.drawTree(location, translateWidth, translateHeight);
        }, 
        
        drawTree: function(location, translateWidth, translateHeight){
            var canvas = document.createElement( 'canvas' );
            
            this.context = canvas.getContext( '2d' );

            canvas.width = 700; 
            canvas.height = 600; 
            $('.tree-' + location).append(canvas);

            this.context.translate(translateWidth, translateHeight);
            this.drawBranch(120, 0);
        },

        drawBranch: function (length, angle) {
            var that = this;
            
            // _.delay(function(){
                that.context.save();
                
                that.context.strokeStyle = 'rgba(0, 102, 77, 05)';
                that.context.rotate(angle * Math.PI/180);
                that.context.lineWidth = length/12;
                
                that.context.beginPath();
                that.context.moveTo(0, 0);
                that.context.lineTo(0, -length);
                that.context.stroke();
                that.context.translate(0, -length);

                if (length > 20) {
                    that.drawBranch(length * randomRange(0.7, 0.9), 30);
                    that.drawBranch(length * randomRange(0.7, 0.9), -30); 
                }

                that.context.restore();
            // }, 100);   
        }
    });

    return TreeView;
});