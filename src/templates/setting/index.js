'use strict';


angular.module('zongmu-3d-label').controller("settingIndexController", ["$scope", "$state", "AppHelper",
  function($scope, $state, AppHelper) {

    $scope.sideBarOptions = {
      groups: [{
        label: "视频设置",
        items: [{
          label: "视频压缩比率",
          selected: true,
          onClick: function(group, groupItem) {
            $state.go("setting.ratio");
            AppHelper.setGroupItemSelected($scope.sideBarOptions.groups, groupItem);
          }
        }, {
          label: "视频属性",
          onClick: function(group, groupItem) {
            $state.go("setting.videoattr");
            AppHelper.setGroupItemSelected($scope.sideBarOptions.groups, groupItem);
          }
        }, {
          label: "视频切割时间",
          onClick: function(group, groupItem) {
            $state.go("setting.videocut");
            AppHelper.setGroupItemSelected($scope.sideBarOptions.groups, groupItem);
          }
        }]
      }, {
        label: "审核",
        items: [{
          label: "审核失败原因",
          onClick: function(group, groupItem) {
            $state.go("setting.reason");
            AppHelper.setGroupItemSelected($scope.sideBarOptions.groups, groupItem);
          }
        }]
      }]
    };
  }
]);