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
    var baseUrl = `${ServiceContext}/reasons`
    return {
      getReasons: function(pageIndex) {
        var url = `${baseUrl}`;
        var params = [];
        if (pageIndex) {
          params.push(`pageIndex=${pageIndex}`);
        }

        if (params.length > 0) {
          url = `${url}?${params.join("&")}`;
        }

        return new ServiceProxy($http.get(url));
      },

      getReason: function(id) {
        return new ServiceProxy($http.get(`${baseUrl}/${id}`));
      },

      createReason: function(name) {
        return new ServiceProxy($http.post(baseUrl, name));
      },

      updateReason: function(id, name) {
        return new ServiceProxy($http.put(`${baseUrl}/${id}`, name));
      },

      deleteReason: function(id) {
        return new ServiceProxy($http.delete(`${baseUrl}/${id}`));
      }
    };
  }
]);