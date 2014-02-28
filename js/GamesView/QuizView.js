define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var QuizView = Backbone.View.extend({
        
        className: 'QuizView',

        render: function(){
            this.$el.html('Quiz');
        }
    });

    return QuizView;
});