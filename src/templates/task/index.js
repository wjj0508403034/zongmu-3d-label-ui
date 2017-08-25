'use strict';


angular.module('zongmu-3d-label').controller("taskIndexController", ["$scope", "$state", "AppHelper",
  function($scope, $state, AppHelper) {

    $scope.sideBarOptions = {
      groups: [{
        label: "标注历史",
        items: [{
          label: "我的标记历史",
          selected: true,
          onClick: function(group, groupItem) {
            $state.go("task.record");
            AppHelper.setGroupItemSelected($scope.sideBarOptions.groups, groupItem);
          }
        }]
      }, {
        label: "任务",
        items: [{
          label: "新建任务",
          onClick: function(group, groupItem) {
            //$state.go("setting.reason");
            AppHelper.setGroupItemSelected($scope.sideBarOptions.groups, groupItem);
          }
        }, {
          label: "所有任务",
          onClick: function(group, groupItem) {
            //$state.go("setting.reason");
            AppHelper.setGroupItemSelected($scope.sideBarOptions.groups, groupItem);
          }
        }]
      }, {
        label: "审核",
        items: [{
          label: "所有审核任务",
          onClick: function(group, groupItem) {
            //$state.go("setting.reason");
            AppHelper.setGroupItemSelected($scope.sideBarOptions.groups, groupItem);
          }
        }, {
          label: "已审核结束任务",
          onClick: function(group, groupItem) {
            //$state.go("setting.reason");
            AppHelper.setGroupItemSelected($scope.sideBarOptions.groups, groupItem);
          }
        }]
      }, {
        label: "视频",
        items: [{
          label: "上传视频",
          onClick: function(group, groupItem) {
            //$state.go("setting.reason");
            AppHelper.setGroupItemSelected($scope.sideBarOptions.groups, groupItem);
          }
        }, {
          label: "视频管理",
          onClick: function(group, groupItem) {
            //$state.go("setting.reason");
            AppHelper.setGroupItemSelected($scope.sideBarOptions.groups, groupItem);
          }
        }]
      }, {
        label: "用户",
        items: [{
          label: "待激活用户",
          onClick: function(group, groupItem) {
            //$state.go("setting.reason");
            AppHelper.setGroupItemSelected($scope.sideBarOptions.groups, groupItem);
          }
        }, {
          label: "用户管理",
          onClick: function(group, groupItem) {
            //$state.go("setting.reason");
            AppHelper.setGroupItemSelected($scope.sideBarOptions.groups, groupItem);
          }
        }]
      }, {
        label: "个人中心",
        items: [{
          label: "个人信息",
          onClick: function(group, groupItem) {
            //$state.go("setting.reason");
            AppHelper.setGroupItemSelected($scope.sideBarOptions.groups, groupItem);
          }
        }, {
          label: "修改密码",
          onClick: function(group, groupItem) {
            //$state.go("setting.reason");
            AppHelper.setGroupItemSelected($scope.sideBarOptions.groups, groupItem);
          }
        }]
      }]
    };
  }
]);