'use strict';


angular.module('zongmu-3d-label').controller("compressionRatioController", ["$scope", "HuoYunWidgets", "$state",
  function($scope, HuoYunWidgets, $state) {

    $scope.setGroupItemSelected("video-setting", "setting.ratio");

    $scope.setBreadCrumb({
      items: [{
        name: "setting",
        label: "视频设置",
        icon: "fa-file-video-o",
        onClick: function(group, groupItem) {
          $state.go("setting.ratio");
        }
      }, {
        name: "setting",
        icon: "fa-hourglass-half",
        label: "视频压缩比率"
      }]
    });
  }
]);