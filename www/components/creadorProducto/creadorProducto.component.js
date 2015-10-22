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
    },
    controller: function($scope, DataService) {
      $scope.closeModal = closeModal;
      $scope.openModal = openModal;
      $scope.saveAndClose = saveAndClose;
      $scope.item = {
        nombre: "",
        precio: 0.0
      };

      function closeModal() {
        $scope.modal.hide();
      };

      function openModal() {
        $scope.modal.show()
      }
      function save(item) {
        DataService.save(item);
      }
      function saveAndClose(item) {
        save(item);
        closeModal();
      }
    },
    controllerAs: 'productos'
  };
});
