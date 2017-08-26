'use strict';


angular.module('zongmu-3d-label').controller("reasonSettingController", ["$scope", "Services",
  function($scope) {

    $scope.tableOptions = {
      title: "原因",
      selectionMode: "single",
      buttons: [{
        name: "add",
        label: "新建",
        appendClass: "btn-primary",
        onClick: function() {
          OpenAttrCreateDialog();
        }
      }],
      columns: [{
        name: "name",
        label: "名称",
        type: "string"
      }]
    };

    RefreshTable();

    function RefreshTable() {
      Services.ReasonService.getReasons()
        .then(function(dataSource) {
          $scope.dataSource = dataSource;
        });
    }

    function OpenAttrCreateDialog() {
      var options = {
        title: `新建原因`,
        templateUrl: "setting/reason/reason.create.dialog.html",
        closeCallback: function(key, data) {
          if (key === "OK") {
            Tip.show("创建原因成功！");
            RefreshTable();
          }
        }
      };
      var dialog = Dialog.showConfirm(options);
    }
  }
]);