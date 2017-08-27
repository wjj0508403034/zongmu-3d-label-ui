'use strict';

angular.module('zongmu-3d-label').provider("httpInterceptor", ["ServiceContext",
  function(ServiceContext) {

    this.dialog = null;

    this.errorHandler = function(res) {
      if (this.dialog && res && res.status) {
        if ([401, 403, 405].indexOf(res.status) !== -1) {
          this.dialog.showConfirm({
            title: "提示",
            content: "用户没有登录或者会话已经过期，请重新登陆？",
            confirm: {
              callback: function() {
                window.location.href = `${ServiceContext}/saml2/sp/logout`;
              }
            }
          });
        } else {
          if (res.data && res.data.code) {
            this.dialog.showError(res.data.message);
          } else {
            this.dialog.showError("系统错误，请联系管理员。");
          }
        }
      }
    };

    this.setDialog = function(dialog) {
      this.dialog = dialog;
    };

    this.$get = function() {
      return this;
    };
  }
]);