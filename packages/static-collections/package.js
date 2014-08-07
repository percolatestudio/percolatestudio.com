Package.describe({
  summary: "Static data collections from markdown",
  version: "0.0.0"
});

Package._transitional_registerBuildPlugin({
  name: "staticCollections",
  use: ['underscore', 'ejson'],
  sources: [
    'static-collections.js'
  ],
  npmDependencies: {}
});