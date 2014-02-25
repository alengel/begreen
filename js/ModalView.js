define([
    'lib/backbone',
    'js/FoodView/MarketsView',
    'js/FoodView/BulkFoodsView',
    'js/FoodView/RecipesView',
    'js/FoodView/FoodBlogsView'
    ], 
function(
    Backbone,
    MarketsView,
    BulkFoodsView,
    RecipesView,
    FoodBlogsView
) {
    'use strict';

    var iconHash = {
        'Markets': 'fa-lemon-o',
        'BulkFoods': 'fa-filter',
        'Recipes': 'fa-magic',
        'FoodBlogs': 'fa-pencil-square-o'
    };

    var ModalView = Backbone.View.extend({
        
        className: 'ModalView',

        events: {
            'click .modal-close-icon' : 'onCloseModal'
        },

        initialize: function(options){
            this.sectionName = options.section;
            this.section = options.section.split(' ').join('');
        }, 

        render: function(){
            var template = '<div class="modal-header">' +
                                '<span class="modal-title"><i class="modal-icon fa ' + iconHash[this.section] + 
                                ' fa-fw"></i>' + this.sectionName + '</span>' +
                                '<i class="modal-close-icon fa fa-times-circle"></i>' +
                            '</div>';

            this.$el.html(template);
            this.createView();
        },

        createView: function(){
            var ViewClass = eval(this.section.concat('View')),
                view = new ViewClass();

            this.$el.append(view.$el);
            view.render();
        }, 

        onCloseModal: function(e){
            e.preventDefault();

            this.$el.remove();
        }
    });

    return ModalView;
});