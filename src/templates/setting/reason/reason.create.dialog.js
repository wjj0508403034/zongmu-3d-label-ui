'use strict';

angular.module('zongmu-3d-label').controller("reasonCreateController", ["$scope", "Services",
  function($scope, Services) {

    $scope.ngDialogData.onConfirmButtonClicked = function() {
      Services.ReasonService.createReason($scope.value)
        .then(function() {
          $scope.confirmClose();
        });
    };
  }
]);