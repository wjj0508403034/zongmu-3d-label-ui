'use strict';

angular.module('zongmu-3d-label').controller("videoAttrController", ["$scope", "Services", "HuoYunWidgets",
  function($scope, Services, HuoYunWidgets) {

    $scope.sideBarOptions.setGroupItemSelected("video-setting", "setting.videoattr");

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
          OpenAttrCreateDialog();
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