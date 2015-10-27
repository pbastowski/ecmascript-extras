Package.describe({
  name: 'pbastowski:ecmascript-extras',
  version: '0.0.2',
  summary: 'Extends the basic ecmascript package with extra Babel transformers',
  git: 'https://github.com/pbastowski/ecmascript-extras/blob/master/ecmascript-extras.js',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use('ecmascript', 'client');
  api.addFiles('ecmascript-extras.js', 'server');
  api.addFiles('babel-helpers.js', 'client');
});
