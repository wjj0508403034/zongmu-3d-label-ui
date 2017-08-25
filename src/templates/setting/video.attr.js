'use strict';

angular.module('zongmu-3d-label').controller("videoAttrController", ["$scope", "Services", "Dialog", "Tip",
  function($scope, Services, Dialog, Tip) {


    $scope.tableOptions = {
      title: "视频属性",
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
        label: "属性名称",
        type: "string"
      }]
    };

    RefreshTable();

    function RefreshTable() {
      Services.VideoAttrService.getAttrs()
        .then(function(dataSource) {
          $scope.dataSource = dataSource;
        });
    }

    function OpenAttrCreateDialog() {
      var options = {
        title: `新建视频属性`,
        templateUrl: "setting/attr/video.attr.create.dialog.html",
        closeCallback: function(key, data) {
          if (key === "OK") {
            Tip.show("创建视频属性成功！");
            RefreshTable();
          }
        }
      };
      var dialog = Dialog.showConfirm(options);
    }
  }
]);