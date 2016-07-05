(function (global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    'api':                        'api',
    'rxjs':                       'node_modules/rxjs',
    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    '@angular2-material':         'node_modules/@angular2-material'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js', defaultExtension: 'js' },
    'api':                        { defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' }
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/forms',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade',
  ];

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function (pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  // put the names of any of your Material components here
  var materialPkgs = [
    'core',
    'button',
    'card',
    'icon',
    'input',
    'toolbar',
    'sidenav',
    'list'
  ];

  materialPkgs.forEach((pkg) => {
    packages[`@angular2-material/${pkg}`] = { main: `${pkg}.js` };
  });

  var config = {
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);
