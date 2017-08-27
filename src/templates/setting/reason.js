'use strict';


angular.module('zongmu-3d-label').controller("reasonSettingController", ["$scope", "Services", "HuoYunWidgets",
  function($scope, Services, HuoYunWidgets) {

    $scope.sideBarOptions.setGroupItemSelected("review-setting", "setting.reason");

    $scope.tableOption = new HuoYunWidgets.TableOption({
      title: "原因",
      selectionMode: "single",
      buttons: [{
        name: "add",
        label: "新建",
        appendClass: "btn-default",
        onClick: function() {
          OpenReasonCreateDialog();
        }
      }, {
        name: "delete",
        label: "删除",
        appendClass: "btn-default",
        onClick: function() {
          DeleteReason();
        },
        disabled: function() {
          return !$scope.tableOption.getSelectedItem();
        }
      }],
      columns: [{
        name: "name",
        label: "名称",
        type: "string"
      }]
    });

    RefreshTable();

    function RefreshTable() {
      Services.ReasonService.getReasons()
        .then(function(dataSource) {
          $scope.tableOption.setSource(dataSource);
        });
    }

    function OpenReasonCreateDialog() {
      var options = {
        title: `新建原因`,
        templateUrl: "setting/reason/reason.create.dialog.html",
      };

      HuoYunWidgets.Dialog.showConfirm(options)
        .then(function() {
          HuoYunWidgets.Tip.show("创建原因成功！");
          RefreshTable();
        });
    }

    function DeleteReason() {
      var reason = $scope.tableOption.getSelectedItem();
      if (reason) {
        Services.ReasonService.deleteReason(reason.id)
          .then(function() {
            HuoYunWidgets.Tip.show("删除成功");
            RefreshTable();
          });
      }
    }
  }
]);