define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var SavingResourcesView = Backbone.View.extend({
        
        className: 'SavingResourcesView',

        render: function(){
            var that = this,
                template = '<i class="spinner-icon fa fa-refresh fa-spin"></i>' +
                           '<iframe class="section-iframe" src="http://www.epa.gov/epahome/home.htm"></iframe>';

            this.$el.html(template);

            this.$('.section-iframe').load(function(){
                that.$('.spinner-icon').remove();
            });
        }
    });

    return SavingResourcesView;
});