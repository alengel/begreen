define([
    'lib/backbone'
    ],
function(
    Backbone
) {
    'use strict';

    var HeaderView = Backbone.View.extend({

        className: 'HeaderView',

        //renders the view and appends the template to the DOM
        render: function(){
            var template = '<header class="header">' +
                              '<i class="fa fa-leaf"></i>' +
                              '<span class="logo-text">Be Green in Brighton</span>' +
                           '</header>';

            this.$el.html(template);
        }
    });

    return HeaderView;
});