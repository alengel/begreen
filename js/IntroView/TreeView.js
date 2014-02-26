define([
    'lib/backbone',
    'lib/polyfill'
    ], 
function(
    Backbone
) {
    'use strict';

    function randomRange (min, max){
        return Math.random() * (max - min) + min;
    }

    function makeTree(location, containerWidth, containerHeight){
        var canvas = document.createElement( 'canvas' ),
            context = canvas.getContext( '2d' );

        canvas.width = containerWidth; 
        canvas.height = containerHeight; 
        $('.tree-' + location).append(canvas);
        
        context.translate(containerWidth/3, containerHeight);

        var maxIterations = 13;
        var currentTransform = context.currentTransform;
        var delay = 250;
          
        branch(120, 0, currentTransform, maxIterations, delay);

        function branch(len, angle, transform, maxIterations, delay) {
            context.save();
            if(maxIterations === 0){
              return;
            }

            _.delay(function(transform){
                context.setTransform.apply(context, transform);
                context.strokeStyle='palegreen';

                context.rotate(angle*Math.PI/180);
                context.lineWidth=len/7;

                context.beginPath();
                context.moveTo(0,0);
                context.lineTo(0,-len);
                context.stroke();
                context.translate(0, -len);

                var currentTransform = context.currentTransform;
                branch(len*randomRange(0.7,0.9), 30, currentTransform, maxIterations - 1, delay);
                branch(len*randomRange(0.7,0.9), -30, currentTransform, maxIterations - 1, delay);
             }, delay, transform);
        }        
    }

    var TreeView = Backbone.View.extend({
        
        className: 'TreeView',

        render: function(location){
            var template = '<div class="tree-' + location + '"></div>',
                containerWidth = this.$el.parent().width(),
                containerHeight = this.$el.parent().height();

            this.$el.html(template); 

            makeTree(location, containerWidth, containerHeight);
        }
    });

    return TreeView;
});