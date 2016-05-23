define([
  'backbone',
  '../../models/_boilerplate/BoilerplateModel'
], function (Backbone, BoilerplateModel){

  var BoilerplateCollection = Backbone.Collection.extend({
    model: BoilerplateModel,
    url: './api/boilerplate'
  });

  return BoilerplateCollection;
});