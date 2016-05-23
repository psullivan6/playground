define([
  'backbone',
], function (Backbone){

  var BoilerplateModel = Backbone.Model.extend({
    name : String
  });

  return BoilerplateModel;
});