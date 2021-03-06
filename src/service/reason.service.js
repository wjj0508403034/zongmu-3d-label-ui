'use strict';


angular.module('zongmu-3d-label').factory("ReasonService", ["$http", "ServiceContext", "ServiceProxy",
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