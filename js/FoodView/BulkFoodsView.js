define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var BulkFoodsView = Backbone.View.extend({
        
        className: 'BulkFoodsView',

        initialize: function(){
            
        }, 

        render: function(){
            this.$el.html('Bulk Foods');
        }
    });

    return BulkFoodsView;
});