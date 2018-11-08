const gulp = require('gulp');
const webpack = require('webpack');
const DeepMerge = require('deep-merge');
var path = require('path');
const fs = require('fs');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const nodemon = require('nodemon');
const WebpackDevServer = require('webpack-dev-server');
const { spawn } = require('child_process');
var backendConfig ={}
var frontendConfig = {}
require("babel-polyfill");
//load .env file
require('dotenv').load()

//generic
var defaultConfig = {
  module: {
    loaders: [
      {test: /\.js/, exclude: /node_modules/, loaders: ['monkey-hot', 'babel'] }
    ]
  }
};

if(process.env.NODE_ENV !== 'production') {
  defaultConfig.devtool = '#eval-source-map';
  //defaultConfig.devtool = 'source-map';
  defaultConfig.debug = true;
}

var deepmerge = DeepMerge(function(target, source, key) {
  if(target instanceof Array) {
    return [].concat(target, source);
  }
  return source;
});

function config(overrides) {
  return deepmerge(defaultConfig, overrides || {})

}

//Frontend webpack Configure
frontendConfig = {
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:3001/',
    'webpack/hot/only-dev-server',
    './src/client/index.js'
  ],

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader/webpack!babel' // react-hot-loader version 3
    }, {
      test: /\.css$/,
      loader: 'style!css'
    },
    {
      test: /\.(jpg|png|svg)$/,
      loader: 'url-loader',
      options: {
        limit: 25000,
      },
    }
  ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'frontend.js'
  },
  devServer: {
    contentBase: 'dist/',
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  postcss: function () {
    return [autoprefixer];
  }
};

//Backend Configure
var nodeModules = fs.readdirSync('node_modules').filter(function(x) {
  return ['.bin'].indexOf(x) === -1;
})

backendConfig = config(
  {
    entry : [
    'babel-polyfill',
    'webpack/hot/signal.js',
    './src/index.js'],
    target: 'node',
    output : {
      path : path.join(__dirname, 'build'),
      filename : 'bundle.js'
    },

    externals : [
    function(context, request, callback) {
      var pathStart = request.split('/')[0];
      if (nodeModules.indexOf(pathStart) >= 0 && request != 'webpack/hot/signal.js') {
        return callback(null, "commonjs " + request);
      };
      callback();
    }
  ],
    plugins : [
      new webpack.IgnorePlugin(/\.(css|less)$/),
      new webpack.BannerPlugin('require("source-map-support").install();',
      {raw : true , entryOnly : false}),
      new UglifyJSPlugin({
        exclude: /\/node_modules/
      }),
      new webpack.HotModuleReplacementPlugin({ quiet: true })
    ]
    //devtool : 'sourcemap'
  }
)


// Gulp Task
gulp.task('backend-build',function(done){
  webpack(backendConfig).run(onBuild(done))
})
gulp.task('frontend-build', function(done) {
  webpack(frontendConfig).run(onBuild(done))
})

gulp.task('backend-watch', function(done) {

  var cmd = './node_modules/.bin/nodemon src/index.js --exec ./node_modules/.bin/babel-node'
  var obj = {
    options: {
      cwd: __dirname
    },
    cmd: 'sh',
    args: ['-c', cmd]
  }

  chSpawn(obj)
})
gulp.task('frontend-watch', function() {

  new WebpackDevServer(webpack(frontendConfig), {
    publicPath: frontendConfig.output.publicPath,
    hot: true,
    inline: true,
    contentBase: 'dist/'
  }).listen(3001, function(err, status) {
    if(err) {
      console.log('Error -> Frontend ==> ', err);
    } else {
      console.log('webpack dev server listening at localhost:3001');
    }
  })
})

gulp.task('run',['backend-watch','frontend-watch'], function(){
  // nodemon({
  //   execMap: {
  //     js: 'node'
  //   },
  //   script: path.join(__dirname, 'build/bundle'),
  //   ignore: ['*'],
  //   watch: ['foo/'],
  //   ext: 'noop'
  // }).on('restart', function() {
  //   console.log('Patched!');
  // });
  var cmd = './node_modules/.bin/nodemon src/index.js --exec ./node_modules/.bin/babel-node'
  var obj = {
    options: {
      cwd: __dirname
    },
    cmd: 'sh',
    args: ['-c', cmd]
  }

  chSpawn(obj)
})

function onBuild(done) {
  return function(err, status) {
    if(err) {
      console.log('Error ', err);
    } else {
      console.log(status.toString());
    }
    if(done) {
      done()
    }
  }
}

function chSpawn( obj ) {
  var ex = spawn(obj.cmd, obj.args, obj.options);
  ex.stdout.on('data',(data)=>{
      console.log(data.toString());
  })
  ex.stderr.on('data',(data)=>{
    console.log('Error -> ',data.toString());
  })
}
