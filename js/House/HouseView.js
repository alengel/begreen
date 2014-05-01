define([
    'lib/backbone',
    'js/ModalView'
    ], 
function(
    Backbone,
    ModalView
) {
    'use strict';

    var HouseView = Backbone.View.extend({
        
        className: 'Content HouseView',

        //listening to events
        events: {
            'click .cleaning' : 'sectionClicked',
            'click .recycling' : 'sectionClicked',
            'click .saving-resources' : 'sectionClicked',
            'click .green-energy' : 'sectionClicked'
        },

        //render view and append template to DOM
        render: function(){
            var template = '<div class="section-container cleaning"><span class="container-title">' +
                                '<i class="container-icon fa fa-wrench fa-fw"></i>Cleaning</span></div>' +
                           '<div class="section-container recycling"><span class="container-title">' +
                                '<i class="container-icon fa fa-trash-o fa-fw"></i>Recycling</span></div>' +
                           '<div class="section-container saving-resources"><span class="container-title">' + 
                                '<i class="container-icon fa fa-power-off fa-fw"></i>Saving Resources</span></div>' +
                           '<div class="section-container green-energy"><span class="container-title">' + 
                                '<i class="container-icon fa fa-bolt fa-fw"></i>Green Energy</span></div>';

            this.$el.html(template);
        }, 

        //prevent default event, initialise modal view, append to DOM and render
        sectionClicked: function(e){
            e.preventDefault();

            this.modalView = new ModalView({section: e.target.innerText});
            this.$el.append(this.modalView.$el);
            this.modalView.render();
        }
    });

    return HouseView;
});