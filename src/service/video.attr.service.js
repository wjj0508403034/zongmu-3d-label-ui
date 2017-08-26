'use strict';


angular.module('zongmu-3d-label').factory("VideoAttrService", ["$http", "ServiceContext", "ServiceProxy",
  function($http, ServiceContext, ServiceProxy) {
    var baseUrl = `${ServiceContext}/video-attrs`
    return {
      getAttrs: function(pageIndex) {
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

      getAttr: function(id) {
        return new ServiceProxy($http.get(`${baseUrl}/${id}`));
      },

      createAttr: function(name) {
        return new ServiceProxy($http.post(baseUrl, name));
      },

      updateAttr: function(id, name) {
        return new ServiceProxy($http.put(`${baseUrl}/${id}`, name));
      },

      deleteAttr: function(id) {
        return new ServiceProxy($http.delete(`${baseUrl}/${id}`));
      },

      createAttrValue: function(attrId, value) {
        return new ServiceProxy($http.post(`${baseUrl}/${attrId}`, value));
      },

      updateAttrValue: function(attrId, valueId, value) {
        return new ServiceProxy($http.put(`${baseUrl}/${attrId}/${valueId}`, value));
      },

      deleteAttrValue: function(attrId, valueId) {
        return new ServiceProxy($http.delete(`${baseUrl}/${attrId}/${valueId}`));
      }
    };
  }
]);