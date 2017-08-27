'use strict';

angular.module('zongmu-3d-label').controller("LoginController", ["$scope", "FormData", "Services", "Validators",
  function($scope, FormData, Services, Validators) {

    $scope.vm = new FormData("email", "password");
    $scope.vm.addValidator("email", Validators.Mandatory, "邮箱不能为空。");
    $scope.vm.addValidator("email", Validators.Email, "邮件格式不正确。");
    $scope.vm.addValidator("password", Validators.Mandatory, "密码不能为空。");

    $scope.login = function() {
      $scope.vm.onValid()
        .then(login)
        .catch(function(ex) {
          $scope.vm.clearErrors();
          $scope.vm.setError(ex.fieldName, ex.errorMessage);
        });
    };

    function login() {
      var model = $scope.vm.getModel();
      Services.LoginService.login(model.email, model.password)
        .then(function() {
          window.location.href = "/index.html";
        }).catch(function(err) {
          $scope.vm.clearErrors();
          $scope.vm.setError("email", err.message);
        });
    }
  }
]);