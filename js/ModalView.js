define([
    'lib/backbone',
    'js/Food/MarketsView',
    'js/Food/BulkFoodsView',
    'js/Food/RecipesView',
    'js/Food/FoodBlogsView',
    'js/House/CleaningView',
    'js/House/RecyclingView',
    'js/House/SavingResourcesView',
    'js/House/GreenEnergyView',
    'js/Facts/CountryChartView'
    ],
function(
    Backbone,
    MarketsView,
    BulkFoodsView,
    RecipesView,
    FoodBlogsView,
    CleaningView,
    RecyclingView,
    SavingResourcesView,
    GreenEnergyView,
    CountryChartView
) {
    'use strict';

    var iconHash = {
        'Markets': 'fa-shopping-cart',
        'BulkFoods': 'fa-filter',
        'Recipes': 'fa-lemon-o',
        'FoodBlogs': 'fa-pencil-square-o',
        'Cleaning': 'fa-wrench',
        'Recycling': 'fa-trash-o',
        'SavingResources': 'fa-power-off',
        'GreenEnergy': 'fa-bolt',
        'country' : 'fa-map-marker'
    };

    var ModalView = Backbone.View.extend({

        className: 'ModalView',

        events: {
            'click .modal-close-icon' : 'onCloseModal'
        },

        //initialises the view and sets the passed in options on the view
        initialize: function(options){
            this.sectionName = options.section;
            this.section = options.section.split(' ').join('');

            //set country on view if passed in
            if(options.country){
                this.country = options.country;
            }
        },

        //render view and append template to the DOM
        render: function(){
            var template = '<div class="modal-header">' +
                                '<span class="modal-title"><i class="modal-icon fa ' + this.getIcon() +
                                ' fa-fw"></i>' + this.sectionName + '</span>' +
                                '<i class="modal-close-icon fa fa-times-circle"></i>' +
                            '</div>';

            this.$el.html(template);
            this.createView();
        },

        //create and render view inside the modal based on passed in options and append to DOM
        createView: function(){
            var ViewClass,
                view;

            //initialise CountryChartView if country is passed in
            if(this.country){
               view = new CountryChartView({country: this.country});
            }
            //initialise passed in view
            else {
                ViewClass = eval(this.section.concat('View'));
                view = new ViewClass();
            }

            this.$el.append(view.$el);
            view.render();
        },

        //call removeModal and prevent default event
        onCloseModal: function(e){
            e.preventDefault();

            this.removeModal();
        },

        //remove modal from DOM
        removeModal: function(){
            this.$el.remove();
        },

        //Get icon from hash or if none matches, set default marker
        getIcon: function(){
            if(this.country){
                return iconHash.country;
            }

            return iconHash[this.section];
        }
    });

    return ModalView;
});