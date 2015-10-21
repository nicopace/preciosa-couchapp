angular.module('preciosa')
.directive('creadorProducto', function(DataService, $ionicModal) {
  return {
    restrict: 'E',
    link: function($scope, $element, $attrs) {

      $ionicModal.fromTemplateUrl('components/creadorProducto/creadorProducto.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal
      });

      $scope.openModal = function() {
        $scope.modal.show()
      };

    },
    controller: function($scope, DataService) {
      $scope.save = save;

      function save(item) {
        DataService.getData().push(item);
      }
    },
    controllerAs: 'productos'
  };
});
