'use strict';

angular.module('zongmu-3d-label').factory("ServiceProxy", ["$q",
  function($q) {
    function ServiceProxy(request) {
      var dtd = $q.defer();
      request.then(function(res) {
        dtd.resolve(res.data);
      }).catch(function(ex) {
        console.error(ex);
        dtd.reject(ex);
      });
      return dtd.promise;
    }
    return ServiceProxy;
  }
]);

angular.module('zongmu-3d-label').factory("Services", ["VideoAttrService", function(VideoAttrService) {
  var Services = {
    VideoAttrService: VideoAttrService
  };

  return Services;
}]);

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

      createAttr: function(name) {
        return new ServiceProxy($http.post(baseUrl, name));
      }
    };
  }
]);