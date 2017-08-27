'use strict';


angular.module('zongmu-3d-label').controller("videoCutSettingController", ["$scope",
  function($scope) {

    $scope.sideBarOptions.setGroupItemSelected("video-setting", "setting.videocut");
  }
]);