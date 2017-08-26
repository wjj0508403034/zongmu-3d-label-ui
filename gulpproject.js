let config = {
  name: "zongmu-3d-label",
  destPath: "dist",
  srcPath: "src",
  deployPath: "./../zongmu-3d-label/3dbox/src/main/resources/",
  entryPoint: "src/app.js",
  dependencies: {
    "jquery": {
      "js": [{
        "src": "./node_modules/jquery/dist/jquery.min.js",
        "target": "/libs/jquery/"
      }]
    },
    "bootstrap": {
      "css": [{
        "src": "./node_modules/bootstrap/dist/css/bootstrap.min.css",
        "target": "/libs/bootstrap/css/"
      }],
      "resource": [{
        "src": "./node_modules/bootstrap/dist/fonts/**",
        "target": "/libs/bootstrap/fonts/",
      }],
      "js": [{
        "src": "./node_modules/bootstrap/dist/js/bootstrap.min.js",
        "target": "/libs/bootstrap/js/"
      }]
    },
    "adminlte": {
      "css": [{
        "src": "./node_modules/admin-lte/dist/css/AdminLTE.min.css",
        "target": "/libs/adminlte/css/"
      }],
      "js": [{
        "src": "./node_modules/admin-lte/dist/js/app.min.js",
        "target": "/libs/adminlte/js/"
      }]
    },
    "angular": {
      "js": [{
        "src": "./node_modules/angular/angular.js",
        "target": "/libs/angular/"
      }]
    },
    "angular-ui-router": {
      "js": [{
        "src": "./node_modules/@uirouter/angularjs/release/angular-ui-router.min.js",
        "target": "/libs/angular-ui-router/"
      }]
    },
    "ng-dialog": {
      "css": [{
        "src": "./node_modules/ng-dialog/css/ngDialog.min.css",
        "target": "/libs/ng-dialog/"
      }, {
        "src": "./node_modules/ng-dialog/css/ngDialog-theme-default.min.css",
        "target": "/libs/ng-dialog/"
      }],
      "js": [{
        "src": "./node_modules/ng-dialog/js/ngDialog.min.js",
        "target": "/libs/ng-dialog/"
      }]
    },
    "font-awesome": {
      "css": [{
        "src": "./node_modules/font-awesome/css/font-awesome.min.css",
        "target": "/libs/font-awesome/css/"
      }],
      "resource": [{
        "src": "./node_modules/font-awesome/fonts/**",
        "target": "/libs/font-awesome/fonts/",
      }]
    },
    "huoyun-widgets": {
      "css": [{
        "src": "./node_modules/huoyun-widgets/dist/huoyun.widget.css",
        "target": "/libs/huoyun-widgets/"
      }],
      "js": [{
        "src": "./node_modules/huoyun-widgets/dist/huoyun.widget.js",
        "target": "/libs/huoyun-widgets/"
      }]
    }
  }
};

module.exports.Config = config;