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

            if(!navigator.onLine){
                var unavailableTemplate = '<div class="unavailable">' +
                                            '<i class="unavailable-icon fa fa-warning"></i>' +
                                                '<span>Sorry, you need an Internet connection to view this content.</span>' +
                                            '<i class="unavailable-icon fa fa-warning"></i>' +
                                          '</div>';
                
                this.$el.html(unavailableTemplate);
                return;
            }

            this.$el.html(template);

            this.$('.section-iframe').load(function(){
                that.$('.spinner-icon').remove();
            });
        }
    });

    return RecyclingView;
});