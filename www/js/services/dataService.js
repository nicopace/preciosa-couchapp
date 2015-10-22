angular.module('preciosa')
.service('DataService', function(pouchCollection) {

  var data = pouchCollection('productos');
  data.$db.replicate.sync('http://127.0.0.1:5984/productos', {live: true});

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
