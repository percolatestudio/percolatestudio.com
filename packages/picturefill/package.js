Package.describe({
  name: 'picturefill',
  summary: 'Picturefill polyfill for HTML5 picture elements',
  version: '2.2.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  // api.use('iron:router');
  api.addFiles(['picturefill-2.2.0.js', 'picturefill.js'], 'client');
});