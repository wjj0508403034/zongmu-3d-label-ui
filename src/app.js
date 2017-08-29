'use strict';

angular.module('zongmu-3d-label', ["huoyun.widget", "huoyun.formdata", "ui.router"]);

angular.module('zongmu-3d-label').constant("ServiceContext", "");

angular.module('zongmu-3d-label').config(["displayProvider", function(displayProvider) {
  displayProvider.config({
    date: "yyyy/MM/dd",
    datetime: "yyyy/MM/dd HH:mm"
  });
}]);

angular.module('zongmu-3d-label').config(function($httpProvider) {
  $httpProvider.interceptors.push("HttpInterceptor");
});

angular.module('zongmu-3d-label').config(['$qProvider', function($qProvider) {
  //$qProvider.errorOnUnhandledRejections(false);
}]);


angular.module('zongmu-3d-label').run(function($rootScope) {

  $rootScope.$on('$stateChangeStart', function(event, toState) {
    console.log(arguments);
  });

  $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
    console.log(arguments);
  });

  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    console.log(arguments);
  });

  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    console.log(arguments);
  });
});

angular.module('zongmu-3d-label').config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when("/", ["$state", function($state) {
    $state.go("home");
  }]);

  $urlRouterProvider.otherwise(function($injector, $location) {
    console.warn($location)
    console.warn(`URL not found, URL: ${$location.$$absUrl}, Path: ${$location.$$url}`);
    $location.path('/');
  });

  $stateProvider
    .state("home", {
      url: "/index",
      templateUrl: "home/index.html",
      controller: 'indexController'
    })
    .state("task", {
      abstract: true,
      url: "/index",
      templateUrl: "task/index.html",
      controller: 'taskIndexController'
    })
    .state("task.record", {
      url: "/record",
      templateUrl: "task/record.html",
      controller: 'taskRecordController'
    })
    .state("setting", {
      abstract: true,
      url: "/index",
      templateUrl: "setting/index.html",
      controller: 'settingIndexController'
    })
    .state("setting.ratio", {
      url: "/ratio",
      templateUrl: "setting/ratio.html",
      controller: 'compressionRatioController'
    })
    .state("setting.videoattr", {
      url: "/video-attr",
      templateUrl: "setting/video.attr.html",
      controller: 'videoAttrController'
    })
    .state("setting.videocut", {
      url: "/videocut",
      templateUrl: "setting/video.cut.html",
      controller: 'videoCutSettingController'
    })
    .state("setting.reason", {
      url: "/reason",
      templateUrl: "setting/reason.html",
      controller: 'reasonSettingController'
    })
    .state("setting.video-attr-detail", {
      url: "/video-attr/:attrId/detail",
      templateUrl: "setting/attr/video.attr.detail.html",
      controller: 'videoAttrDetailController'
    });

});

angular.module('zongmu-3d-label').controller("appController", ["$scope", "permission", "$state", "httpInterceptor", "HuoYunWidgets", "Services",
  function($scope, permissionProvider, $state, httpInterceptorProvider, HuoYunWidgets, Services) {
    httpInterceptorProvider.setDialog(HuoYunWidgets.Dialog);

    if (Cookies.get("login")) {
      Services.UserService.getMyProfile()
        .then(function(user) {
          permissionProvider.setUser(user);
        });
    } else {
      permissionProvider.cleanUser();
    }

    $scope.headOptions = {
      title: "3d标注系统",
      onTitleClick: function() {
        window.location.href = "/";
      },
      rightTemplateUrl: "head/right.template.html"
    };

    $scope.navOption = new HuoYunWidgets.NavOption({
      items: [{
        label: "任务大厅",
        name: "index",
        onClick: function() {
          $state.go("home");
        }
      }, {
        label: "个人中心",
        name: "personal-center",
        visibility: function() {
          return permissionProvider.isLogin();
        },
        onClick: function() {
          $state.go("task.record");
        }
      }, {
        label: "系统设置",
        name: "setting",
        visibility: function() {
          return permissionProvider.visibilityInRoles(["Manager"]);
        },
        onClick: function() {
          $state.go("setting.ratio");
        }
      }, {
        label: "帮助",
        name: "help",
        onClick: function() {
          $state.go("help");
        }
      }]
    });
  }
]);