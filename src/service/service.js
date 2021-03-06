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

angular.module('zongmu-3d-label').factory("Services", ["VideoAttrService", "ReasonService", "LoginService", "UserService",
  function(VideoAttrService, ReasonService, LoginService, UserService) {
    var Services = {
      VideoAttrService: VideoAttrService,
      ReasonService: ReasonService,
      LoginService: LoginService,
      UserService: UserService
    };

    return Services;
  }
]);