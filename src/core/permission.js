'use strict';

angular.module('zongmu-3d-label').provider("permission", function() {

  this.user = null;

  this.setUser = function(user) {
    this.user = user;
  };

  this.cleanUser = function() {
    this.user = null;
  };

  this.isLogin = function() {
    return !!this.user;
  };

  this.visibilityInRoles = function(roles) {
    if (this.user) {
      return roles.indexOf(this.user.businessRole) !== -1;
    }

    return false;
  };

  this.$get = function() {
    return this;
  };
});