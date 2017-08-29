'use strict';

angular.module('zongmu-3d-label').controller("headRightTemplateController", ["$scope", "permission", "Services",
  function($scope, permissionProvider, Services) {

    $scope.isLogin = function() {
      return permissionProvider.isLogin();
    };

    $scope.onLoginButtonClicked = function() {
      window.location.href = "/login.html";
    };

    $scope.onRegisterButtonClicked = function() {
      window.location.href = "/register.html";
    };

    $scope.onLogoutButtonClicked = function() {
      Services.LoginService.logout()
        .then(function() {
          permissionProvider.cleanUser();
          window.location.href = "/login.html";
        });
    };

    $scope.getUserName = function() {
      var user = permissionProvider.getUser();
      return user.userName || user.email;
    };
  }
]);