Package.describe({
  name: 'react-router',
  version: '0.11.6',
  // Brief, one-line summary of the package.
  summary: 'A complete routing library for React.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({'react-router': '0.11.6'});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  
  // UGGH can we get this from bower please?
  api.addFiles('react-router-0.11.6.js', 'client');
  
  api.addFiles('react-router.js');
  
  api.export('Router');
});
