define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var RecyclingView = Backbone.View.extend({
        
        className: 'RecyclingView',

        render: function(){
            var that = this,
                template = '<i class="spinner-icon fa fa-refresh fa-spin"></i>' +
                           '<iframe class="recycling-iframe" src="http://goo.gl/ZxkJZm"></iframe>';

            this.$el.html(template);

             _.delay(function(){
                that.$('.spinner-icon').remove();
            }, 4000);
        }
    });

    return RecyclingView;
});