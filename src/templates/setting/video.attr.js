'use strict';

angular.module('zongmu-3d-label').controller("videoAttrController", ["$scope", "Services", "HuoYunWidgets", "$state",
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
        name: "setting",
        icon: "fa-tags",
        label: "视频属性"
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
          OpenAttrCreateDialog();
        }
      }, {
        name: "delete",
        label: "删除",
        appendClass: "btn-default",
        onClick: function() {
          DeleteAttr();
        },
        disabled: function() {
          return !$scope.tableOption.getSelectedItem();
        }
      }, {
        name: "view",
        label: "查看",
        appendClass: "btn-default",
        onClick: function() {
          var attr = $scope.tableOption.getSelectedItem();
          if (attr) {
            $state.go("setting.video-attr-detail", {
              attrId: attr.id
            });
          }
        },
        disabled: function() {
          return !$scope.tableOption.getSelectedItem();
        }
      }],
      columns: [{
        name: "name",
        label: "属性名称",
        type: "string"
      }]
    });

    RefreshTable();

    function RefreshTable() {
      Services.VideoAttrService.getAttrs()
        .then(function(dataSource) {
          $scope.tableOption.setSource(dataSource);
        });
    }

    function DeleteAttr() {
      var attr = $scope.tableOption.getSelectedItem();
      if (attr) {
        Services.VideoAttrService.deleteAttr(attr.id)
          .then(function() {
            HuoYunWidgets.Tip.show("删除成功！");
            RefreshTable();
          });
      }
    }

    function OpenAttrCreateDialog() {
      var options = {
        title: `新建视频属性`,
        templateUrl: "setting/attr/video.attr.create.dialog.html"
      };

      HuoYunWidgets.Dialog.showConfirm(options)
        .then(function() {
          HuoYunWidgets.Tip.show("创建视频属性成功！");
          RefreshTable();
        });
    }
  }
]);