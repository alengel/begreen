define([
    'lib/backbone'
    ],
function(
    Backbone
) {
    'use strict';

    var RecyclingView = Backbone.View.extend({

        className: 'RecyclingView',

        //render the view and append the template to the DOM
        render: function(){
            var that = this,
                template = '<i class="spinner-icon fa fa-refresh fa-spin"></i>' +
                           '<iframe class="section-iframe" src="http://goo.gl/ZxkJZm"></iframe>';

            //if page inside the iframe is not available, show unavailable template
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
            this.setHeightOnIframe();

            //when iframe is loaded, remove spinner
            this.$('.section-iframe').load(function(){
                that.$('.spinner-icon').remove();
            });
        },

        //dynamically set height on the iframe as iframes can't detect their parent container size
        setHeightOnIframe: function(){
            var height = this.$el.parent().height();
            this.$('iframe').css('height', height);
        }
    });

    return RecyclingView;
});