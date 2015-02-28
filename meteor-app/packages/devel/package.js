Package.describe({
  name: 'devel',
  summary: 'Adds Meteor.isDevel when running unbundled',
  version: '1.0.0',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.0-rc.2');
  api.addFiles('devel.js');
});
