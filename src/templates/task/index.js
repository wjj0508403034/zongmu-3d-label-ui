'use strict';


angular.module('zongmu-3d-label').controller("taskIndexController", ["$scope", "$state", "HuoYunWidgets",
  function($scope, $state, HuoYunWidgets) {

    $scope.navOption.setSelected("personal-center");

    $scope.sideBarOptions = new HuoYunWidgets.SidebarOption({
      groups: [{
        name: "group-record",
        label: "标注历史",
        items: [{
          label: "我的标记历史",
          name: "my-task-record",
          selected: true,
          onClick: function(group, groupItem) {
            $state.go("task.record");
          }
        }]
      }, {
        name: "group-task",
        label: "任务",
        items: [{
          label: "新建任务",
          name: "new-task",
          onClick: function(group, groupItem) {
            //$state.go("setting.reason");

          }
        }, {

          label: "所有任务",
          name: "all-tasks",
          onClick: function(group, groupItem) {
            //$state.go("setting.reason");

          }
        }]
      }, {
        name: "group-review",
        label: "审核",
        items: [{
          label: "所有审核任务",
          name: "all-reviews",
          onClick: function(group, groupItem) {
            //$state.go("setting.reason");

          }
        }, {
          label: "已审核结束任务",
          name: "all-end-reviews",
          onClick: function(group, groupItem) {
            //$state.go("setting.reason");

          }
        }]
      }, {
        name: "group-video",
        label: "视频",
        items: [{
          label: "上传视频",
          name: "upload-video",
          onClick: function(group, groupItem) {
            //$state.go("setting.reason");

          }
        }, {
          label: "视频管理",
          name: "all-videos",
          onClick: function(group, groupItem) {
            //$state.go("setting.reason");

          }
        }]
      }, {
        name: "group-user",
        label: "用户",
        items: [{
          name: "wait-active-users",
          label: "待激活用户",
          onClick: function(group, groupItem) {
            //$state.go("setting.reason");

          }
        }, {
          name: "all-users",
          label: "用户管理",
          onClick: function(group, groupItem) {
            //$state.go("setting.reason");

          }
        }]
      }, {
        name: "group-my",
        label: "个人中心",
        items: [{
          name: "my",
          label: "个人信息",
          onClick: function(group, groupItem) {
            //$state.go("setting.reason");

          }
        }, {
          name: "reset-password",
          label: "修改密码",
          onClick: function(group, groupItem) {
            //$state.go("setting.reason");

          }
        }]
      }]
    });
  }
]);