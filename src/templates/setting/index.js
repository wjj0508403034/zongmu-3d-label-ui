'use strict';


angular.module('zongmu-3d-label').controller("settingIndexController", ["$scope", "$state", "HuoYunWidgets",
  function($scope, $state, HuoYunWidgets) {

    $scope.navOption.setSelected("setting");

    $scope.setBreadCrumb = function(option) {
      $scope.breadCrumbOption = new HuoYunWidgets.BreadCrumbOption(option);
    };

    $scope.setGroupItemSelected = function(groupName, groupItemName) {
      $scope.sideBarOptions.setGroupItemSelected(groupName, groupItemName);
    };

    $scope.sideBarOptions = new HuoYunWidgets.SidebarOption({
      groups: [{
        label: "视频设置",
        name: "video-setting",
        items: [{
          label: "视频压缩比率",
          name: "setting.ratio",
          selected: true,
          onClick: function(group, groupItem) {
            $state.go("setting.ratio");
          }
        }, {
          label: "视频属性",
          name: "setting.videoattr",
          onClick: function(group, groupItem) {
            $state.go("setting.videoattr");
          }
        }, {
          label: "视频切割时间",
          name: "setting.videocut",
          onClick: function(group, groupItem) {
            $state.go("setting.videocut");
          }
        }]
      }, {
        label: "审核",
        name: "review-setting",
        items: [{
          label: "审核失败原因",
          name: "setting.reason",
          onClick: function(group, groupItem) {
            $state.go("setting.reason");
          }
        }]
      }]
    });
  }
]);