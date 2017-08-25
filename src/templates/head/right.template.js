'use strict';

angular.module('zongmu-3d-label').controller("headRightTemplateController", ["$scope", "permission", function($scope,
  permissionProvider) {

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
    permissionProvider.cleanUser();
  };
}]);