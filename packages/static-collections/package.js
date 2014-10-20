Package.describe({
  name: 'static-collections',
  summary: "Static data collections from markdown",
  version: "1.0.0"
});

Package._transitional_registerBuildPlugin({
  name: "staticCollections",
  use: ['underscore', 'ejson'],
  sources: [
    'static-collections.js'
  ],
  npmDependencies: {}
});