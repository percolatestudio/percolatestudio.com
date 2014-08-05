Package.describe({
  summary: "Static data collections from markdown"
});

Package._transitional_registerBuildPlugin({
  name: "staticCollections",
  use: ['underscore', 'ejson'],
  sources: [
    'static-collections.js'
  ],
  npmDependencies: {}
});