var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './app/index.js'
  ],

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
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
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  postcss: function () {
    return [autoprefixer];
  }
};

/*test: /\.css$/,
      loader: 'style!css!postcss'*/
