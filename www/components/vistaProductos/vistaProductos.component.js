angular.module('preciosa')
.directive('vistaProductos', function(DataService) {
  return {
    scope: true,
    controller: function($scope) {
      $scope.items = DataService.getData();

      $scope.add = function(item) {
        $scope.items.push(item);
      }
    },
    controllerAs: 'productos',
    templateUrl: 'components/vistaProductos/vistaProductos.html'
  };
});
