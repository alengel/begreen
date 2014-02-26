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

        render: function(){
            var template = '<div class="section-container markets"><span class="container-title">' +
                                '<i class="container-icon fa fa-shopping-cart fa-fw"></i>Markets</span></div>' +
                           '<div class="section-container bulk-food"><span class="container-title">' +
                                '<i class="container-icon fa fa-filter fa-fw"></i>Bulk Foods</span></div>' +
                           '<div class="section-container recipes"><span class="container-title">' + 
                                '<i class="container-icon fa fa-lemon-o fa-fw"></i>Recipes</span></div>' +
                           '<div class="section-container food-blogs"><span class="container-title">' + 
                                '<i class="container-icon fa fa-pencil-square-o fa-fw"></i>Food Blogs</span></div>';

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