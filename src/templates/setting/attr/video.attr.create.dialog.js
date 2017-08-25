'use strict';

angular.module('zongmu-3d-label').controller("videoAttrCreateController", ["$scope", "Services", "Dialog",
  function($scope, Services, Dialog) {
    $scope.ngDialogData.onConfirmButtonClicked = function() {
      Services.VideoAttrService.createAttr($scope.value)
        .then(function() {
          $scope.closeThisDialog(['OK']);
        });
    };
  }
]);