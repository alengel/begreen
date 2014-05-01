define([
    'lib/backbone'
    ], 
function(
    Backbone
) {
    'use strict';

    var RecipesView = Backbone.View.extend({
        
        className: 'RecipesView',

        //render view and append to DOM
        render: function(){
            var template = '<ul class="table-entries">' +
                                '<li class="table-entry">' + 
                                    '<span class="table-title">Banana Salted Caramel Cream Dessert</span>' +
                                    '<a class="table-info" target="_blank" href="http://goo.gl/j93fGI">' + 
                                        '<i class="section-icon fa fa-file-o"></i>See Recipe</a>' +
                                '</li>' +
                                '<li class="table-entry">' + 
                                    '<span class="table-title">Cinnamon Spice Quick Bread</span>' +
                                    '<a class="table-info" target="_blank" href="http://goo.gl/O5BgsB">' + 
                                        '<i class="section-icon fa fa-file-o"></i>See Recipe</a>' +
                                '</li>' +
                                '<li class="table-entry">' + 
                                    '<span class="table-title">Crème Brûlée with Love</span>' +
                                    '<a class="table-info" target="_blank" href="http://goo.gl/2IuP56">' + 
                                        '<i class="section-icon fa fa-file-o"></i>See Recipe</a>' +
                                '</li>' +
                                '<li class="table-entry">' + 
                                    '<span class="table-title">Hello Dumpling</span>' +
                                    '<a class="table-info" target="_blank" href="http://goo.gl/yFHuPd">' + 
                                        '<i class="section-icon fa fa-file-o"></i>See Recipe</a>' +
                                '</li>' +
                                '<li class="table-entry">' + 
                                    '<span class="table-title">No Pasta Lasagne</span>' +
                                    '<a class="table-info" target="_blank" href="http://goo.gl/iBou6w">' + 
                                        '<i class="section-icon fa fa-file-o"></i>See Recipe</a>' +
                                '</li>' +
                                '<li class="table-entry">' + 
                                    '<span class="table-title">Orzo Pasta with Grilled Salmon</span>' +
                                    '<a class="table-info" target="_blank" href="http://goo.gl/iBou6w">' + 
                                        '<i class="section-icon fa fa-file-o"></i>See Recipe</a>' +
                                '</li>' +
                                '<li class="table-entry">' + 
                                    '<span class="table-title">Potato Pizza</span>' +
                                    '<a class="table-info" target="_blank" href="http://goo.gl/aJWN36">' + 
                                        '<i class="section-icon fa fa-file-o"></i>See Recipe</a>' +
                                '</li>' +
                                '<li class="table-entry">' + 
                                    '<span class="table-title">Rainbow Pasta Salad with Roasted Roots and Oven-Dried Tomatoes</span>' +
                                    '<a class="table-info" target="_blank" href="http://goo.gl/7of9zv">' + 
                                        '<i class="section-icon fa fa-file-o"></i>See Recipe</a>' +
                                '</li>' +
                           '</ul>';

            this.$el.html(template);
        }
    });

    return RecipesView;
});