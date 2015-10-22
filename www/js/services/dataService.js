angular.module('preciosa')
.service('DataService', function(pouchCollection) {

  var data = pouchCollection('productos');

  return {
    getData: getData,
    save: save
  };

  function getData() {
    return data;
  }

  function save(item) {
    data.$add(item);
  }
})
