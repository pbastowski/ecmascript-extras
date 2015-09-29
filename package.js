Package.describe({
  name: 'pbastowski:ecmascript-extras',
  version: '0.0.1',
  summary: 'Extends ecmascript with babel helpers needed for angular2-now',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use('ecmascript', 'client');
  api.addFiles('ecmascript-extras.js', 'server');
  api.addFiles('babel-helpers.js', 'client');
});
