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
                           '<iframe class="section-iframe" src="http://goo.gl/ZxkJZm"></iframe>';

            this.$el.html(template);

            this.$('.section-iframe').load(function(){
                that.$('.spinner-icon').remove();
            });
        }
    });

    return RecyclingView;
});