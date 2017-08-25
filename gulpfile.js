let gulp = require('gulp');
let showFile = require('gulp-show-me-file');
let del = require('del');
let merge = require('merge-stream')
let concat = require('gulp-concat');
let minifyHtml = require('gulp-minify-html');
let angularTemplatecache = require('gulp-angular-templatecache');
let bom = require('gulp-bom');
let babel = require('gulp-babel');
let inject = require('gulp-inject');

let project = require("./gulpproject.js");

gulp.task('default', ['build']);

gulp.task('clean', function() {
  return del([project.Config.destPath]);
});

gulp.task("copy-thirdparty", ["clean"], function() {
  let streams = [];
  Object.keys(project.Config.dependencies).forEach(function(name) {
    let dependency = project.Config.dependencies[name];
    ["js", "css", "resource"].forEach(function(key) {
      let copy = dependency[key];
      if (copy && Array.isArray(copy)) {
        copy.forEach(function(copyItem) {
          let stream = gulp.src(copyItem.src)
            .pipe(showFile("Build Source"))
            .pipe(gulp.dest(`${project.Config.destPath}${copyItem.target}`))
            .pipe(showFile("Build Target"));

          streams.push(stream);
        });
      }
    });
  });

  return merge(streams);
});

gulp.task("copy-res", ["clean"], function() {
  return gulp.src(`${project.Config.srcPath}/res/**`)
    .pipe(showFile("Copy Resource: Source"))
    .pipe(gulp.dest(`${project.Config.destPath}/res`))
    .pipe(showFile("Copy Resource: Target"));
});

gulp.task("build-js", ["clean"], function() {
  var templateStream = gulp.src('src/templates/**/*.html')
    .pipe(showFile())
    .pipe(minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe(angularTemplatecache('view.template.tpl.js', {
      module: project.Config.name
    }));

  var es = require('event-stream');
  return es.merge([
      gulp.src([project.Config.entryPoint, `${project.Config.srcPath}/**/*.js`]),
      templateStream
    ])
    .pipe(showFile("Build JS"))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat(`${project.Config.name}.js`))
    .pipe(gulp.dest(`${project.Config.destPath}/${project.Config.name}`));
});

gulp.task("build-css", ["clean"], function() {
  return gulp.src(`${project.Config.srcPath}/**/*.css`)
    .pipe(showFile("Build CSS"))
    .pipe(concat(`${project.Config.name}.css`))
    .pipe(gulp.dest(`${project.Config.destPath}/${project.Config.name}`));
});

gulp.task("inject-pages", ["clean", "build-css", "build-js"], function() {

  let timestamp = Date.now();
  var css = [];
  var js = [];

  Object.keys(project.Config.dependencies).forEach(function(name) {
    let dependency = project.Config.dependencies[name];
    if (dependency.js) {
      dependency.js.forEach(function(item) {
        js.push(`${project.Config.destPath}${item.target}**/*.js`);
      });
    }
    if (dependency.css) {
      dependency.css.forEach(function(item) {
        css.push(`${project.Config.destPath}${item.target}**/*.css`);
      });
    }
  });

  js.push(`${project.Config.destPath}/${project.Config.name}/**/*.js`);
  css.push(`${project.Config.destPath}/${project.Config.name}/**/*.css`);

  var injectCss = gulp.src(css, {
    read: false
  });

  var injectJs = gulp.src(js, {
    read: false
  });

  return gulp.src(`${project.Config.srcPath}/pages/**/*.html`)
    .pipe(showFile("Inject Pages"))
    .pipe(inject(injectCss, {
      transform: function(filepath) {
        filepath = filepath.replace("/dist", "");
        filepath = `${filepath}?v=${timestamp}`;
        return `<link rel="stylesheet" href="..${filepath}"></link>`;
      }
    }))
    .pipe(inject(injectJs, {
      transform: function(filepath) {
        filepath = filepath.replace("/dist", "");
        filepath = `${filepath}?v=${timestamp}`;
        return `<script src="..${filepath}"></script>`;
      }
    }))
    .pipe(bom())
    .pipe(gulp.dest(`${project.Config.destPath}/templates`));
});

gulp.task("build", ["copy-thirdparty", "copy-res", "build-js", "build-css", "inject-pages"], function() {

});

gulp.task("deploy-clean", [], function() {
  return del([`${project.Config.deployPath}static`, `${project.Config.deployPath}templates`], {
    force: true
  });
});

gulp.task("deploy-copy-resource", ["deploy-clean", "build"], function() {
  return gulp.src([`!${project.Config.destPath}/templates/*`, `${project.Config.destPath}/**`])
    .pipe(showFile("Deploy Source: Copy Resource"))
    .pipe(gulp.dest(`${project.Config.deployPath}static`))
    .pipe(showFile("Deploy Target: Copy Resource"));
});

gulp.task("deploy-copy-templates", ["deploy-clean", "build"], function() {
  return gulp.src(`${project.Config.destPath}/templates/**`)
    .pipe(showFile("Deploy Source: Copy Templates"))
    .pipe(gulp.dest(`${project.Config.deployPath}templates`))
    .pipe(showFile("Deploy Target: Copy Templates"));
});

gulp.task("deploy", ["deploy-copy-resource", "deploy-copy-templates"], function() {

});