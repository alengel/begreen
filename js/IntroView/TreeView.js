define([
    'lib/backbone',
    'lib/transform-tracker'
    ], 
function(
    Backbone
) {
    'use strict';

    function randomRange (min, max){
        return Math.random() * (max - min) + min;
    }

    function makeTree(location, containerWidth, containerHeight, width){
        var canvas = document.createElement( 'canvas' ),
            context = canvas.getContext( '2d' ),
            maxIterations = 12,
            currentTransform,
            delay = 250;

        canvas.width = width; 
        canvas.height = containerHeight; 
        $('.tree-' + location).append(canvas);
        
        context.transform = new Transform(context);
        context.transform.translate(containerWidth, containerHeight);
        currentTransform = context.transform.getMatrix();
          
        branch(120, 0, currentTransform, maxIterations, delay);

        function branch(length, angle, transform, maxIterations, delay) {
            
            if(maxIterations === 0){
              return;
            }

            _.delay(function(transform){
                var currentTransform;

                context.transform.setMatrix(transform);
                
                if(maxIterations > 8){
                    context.strokeStyle='rgba(56, 22, 18, 0.7)';
                }
                if(maxIterations <= 8 && maxIterations > 4){
                    context.strokeStyle='rgba(31, 166, 122, 0.7)';
                }
                if(maxIterations <= 4 && maxIterations > 0){
                    context.strokeStyle='rgba(31, 166, 122, 0.4)';
                }

                context.transform.rotate(angle * Math.PI/180);
                context.lineWidth = length/7;
                context.beginPath();
                context.moveTo(0, 0);
                context.lineTo(0, -length);
                context.stroke();
                context.transform.translate(0, -length);

                currentTransform = context.transform.getMatrix();
                
                branch(length * randomRange(0.7, 0.9), 30, currentTransform, maxIterations - 1, delay);
                branch(length * randomRange(0.7, 0.9), -30, currentTransform, maxIterations - 1, delay);
             }, delay, transform);
        }        
    }

    var TreeView = Backbone.View.extend({
        
        className: 'TreeView',

        render: function(location, containerWidth){
            var template = '<div class="tree-' + location + '"></div>',
                fullWidth = this.$el.parent().width(),
                containerHeight = this.$el.parent().height();

            this.$el.html(template); 

            makeTree(location, containerWidth, containerHeight, fullWidth);
        }
    });

    return TreeView;
});