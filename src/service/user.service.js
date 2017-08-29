'use strict';
angular.module('zongmu-3d-label').factory("LoginService", ["$http", "ServiceContext", "ServiceProxy",
  function($http, ServiceContext, ServiceProxy) {
    var baseUrl = `${ServiceContext}`
    return {
      login: function(email, password) {
        return new ServiceProxy($http.post(`${baseUrl}/login`, {
          email: email,
          password: password
        }));
      },
      logout: function() {
        return new ServiceProxy($http.post(`${baseUrl}/logout`, {}));
      },
      register: function(email, password, repeatPassword) {
        return new ServiceProxy($http.post(`${baseUrl}/register`, {
          email: email,
          password: password,
          repeatPassword: repeatPassword
        }));
      }
    };
  }
]);

angular.module('zongmu-3d-label').factory("UserService", ["$http", "ServiceContext", "ServiceProxy",
  function($http, ServiceContext, ServiceProxy) {
    var baseUrl = `${ServiceContext}/users`
    return {
      getMyProfile: function() {
        return new ServiceProxy($http.get(`${baseUrl}/me`));
      }
    };
  }
]);