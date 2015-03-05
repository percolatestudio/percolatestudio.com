var _ = require('lodash');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function (grunt) {
  var s3Config = grunt.file.readJSON('./s3.config.json');
  
  var config = {
    clean: ['./build', './static'],
    concurrent: {
      dev: ['nodemon:dev', 'webpack:dev'],
      options: {
        logConcurrentOutput: true
      }
    },
    execute: {
      static: {
        options: {
          cwd: './static'
        },
        src: ['./app/static.js']
      }
    },
    copy: {
      static: {
        files: [{
          expand: true,
          cwd: 'app/assets/',
          src: ['**/*'],
          dest: 'static/'
        }]
      }
    },
    nodemon: {
      dev: {
        script: './app/server.js',
        options: {
          ignore: ['./build/**'],
          ext: 'js,jsx'
        }
      }
    },
    webpack: {
      dev: {
        resolve: {
          extensions: ['', '.js', '.jsx']
        },
        entry: './app/client.js',
        output: {
          path: './build',
          filename: 'client.js'
        },
        module: {
          loaders: [
            { test: /\.css$/, loader: 'style!css' },
            // Use "css-loader?minimize!less-loader" for minification
            { test: /\.less$/,loader: ExtractTextPlugin.extract("style-loader", 
              "css-loader!less-loader") }, 
            { test: /\.jsx$/, loader: 'jsx-loader' }
            
          ]
        },
        plugins: [ new ExtractTextPlugin("client.css") ],
        stats: {
          colors: true
        },
        devtool: 'source-map',
        watch: true,
        keepalive: true
      }
    },
    uglify: {
      options: {
      },
      static: {
        files: {
          'static/js/client.js': ['build/client.js']
        }
      }
    },
    s3: {
      options: {
        key: s3Config.key,
        secret: s3Config.secret,
        bucket: s3Config.bucket,
        region: s3Config.region || 'us-west-2',
        access: 'public-read',
        // headers: {
        //   // Two Year cache policy (1000 * 60 * 60 * 24 * 730)
        //   "Cache-Control": "max-age=630720000, public",
        //   "Expires": new Date(Date.now() + 63072000000).toUTCString()
        // },
        // maxOperations: 20,
        verify: true,
        gzipExclude: ['.jpg', '.jpeg', '.png']
      },
      deploy: {
        sync: [{ 
          src: 'static/**/*', 
          dest: '/', 
          rel: path.join(process.cwd(), "static"),
          gzip: true
        }]
      }
    }
  };
  
  // Copy the dev webpack configuration but don't watch
  config.webpack.static = _.clone(config.webpack.dev);
  config.webpack.static.watch = false;
  config.webpack.static.keepalive = false;

  grunt.initConfig(config);
  
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('grunt-s3');
  grunt.loadNpmTasks('grunt-npm-install');

  grunt.registerTask('default', ['clean', 'npm-install', 'concurrent:dev']);

  grunt.registerTask('static', ['clean', 'npm-install', 'webpack:static', 'copy:static', 
    'uglify:static', 'execute:static']);
      
  grunt.registerTask('deploy', ['static', 's3:deploy']);

  // For testing!
  grunt.registerTask('static-only', ['execute:static']);
};
