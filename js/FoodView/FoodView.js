define([
    'lib/backbone',
    'js/ModalView'
    ], 
function(
    Backbone,
    ModalView
) {
    'use strict';

    var FoodView = Backbone.View.extend({
        
        className: 'Content FoodView',

        events: {
            'click .markets' : 'sectionClicked',
            'click .bulk-food' : 'sectionClicked',
            'click .recipes' : 'sectionClicked',
            'click .food-blogs' : 'sectionClicked'
        },

        initialize: function(){

        }, 

        render: function(){
            var template = '<div class="food-section markets"><span class="food-title">' +
                                '<i class="food-icon fa fa-lemon-o fa-fw"></i>Markets</span></div>' +
                           '<div class="food-section bulk-food"><span class="food-title">' +
                                '<i class="food-icon fa fa-filter fa-fw"></i>Bulk Foods</span></div>' +
                           '<div class="food-section recipes"><span class="food-title">' + 
                                '<i class="food-icon fa fa-magic fa-fw"></i>Recipes</span></div>' +
                           '<div class="food-section food-blogs"><span class="food-title">' + 
                                '<i class="food-icon fa fa-pencil-square-o fa-fw"></i>Food Blogs</span></div>';

            this.$el.html(template);
        }, 

        sectionClicked: function(e){
            e.preventDefault();

            this.modalView = new ModalView({section: e.target.innerText});
            this.$el.append(this.modalView.$el);
            this.modalView.render();
        }
    });

    return FoodView;
});