'use strict';

angular.module('zongmu-3d-label').controller("videoAttrDetailController", ["$scope", "Services", "HuoYunWidgets", "$state",
  function($scope, Services, HuoYunWidgets, $state) {
    $scope.setGroupItemSelected("video-setting", "setting.videoattr");

    $scope.setBreadCrumb({
      items: [{
        name: "setting",
        label: "视频设置",
        icon: "fa-file-video-o",
        onClick: function(group, groupItem) {
          $state.go("setting.ratio");
        }
      }, {
        name: "video-attrs",
        icon: "fa-tags",
        label: "视频属性",
        onClick: function(group, groupItem) {
          $state.go("setting.videoattr");
        }
      }, {
        name: "video-attr-detail",
        icon: "fa-tag",
        label: "属性详情"
      }]
    });

    $scope.tableOption = new HuoYunWidgets.TableOption({
      title: "视频属性",
      selectionMode: "single",
      buttons: [{
        name: "add",
        label: "新建",
        appendClass: "btn-default",
        onClick: function() {
          //OpenAttrCreateDialog();
        }
      }, {
        name: "delete",
        label: "删除",
        appendClass: "btn-default",
        onClick: function() {
          //DeleteAttr();
        },
        disabled: function() {
          return !$scope.tableOption.getSelectedItem();
        }
      }],
      columns: [{
        name: "value",
        label: "值",
        type: "string"
      }]
    });

    var attrId = $state.params.attrId;
    Services.VideoAttrService.getAttr(attrId)
      .then(function(attr) {
        $scope.attr = attr;
        $scope.tableOption.setSource({
          content: attr.items
        });
      });
  }
]);