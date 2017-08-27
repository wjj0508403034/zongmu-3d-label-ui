'use strict';


angular.module('zongmu-3d-label').controller("compressionRatioController", ["$scope",
  function($scope) {

    $scope.sideBarOptions.setGroupItemSelected("video-setting", "setting.ratio");
  }
]);