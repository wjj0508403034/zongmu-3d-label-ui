'use strict';

angular.module('zongmu-3d-label').factory("HttpInterceptor", ["$log", "httpInterceptor", "$q",
  function($log, httpInterceptorProvider, $q) {

    return {
      "requestError": function(rejection) {
        $log.warn("http request has error ...", rejection);
        httpInterceptorProvider.errorHandler(rejection);
        return $q.reject(rejection);
      },

      "responseError": function(rejection) {
        $log.warn("http response has error ...", rejection);
        httpInterceptorProvider.errorHandler(rejection);
        return $q.reject(rejection);
      }
    };
  }
]);