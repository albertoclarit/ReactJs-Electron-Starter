/*eslint no-console:0 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var open = require('open');
var shelljs = require('shelljs');

new WebpackDevServer(webpack(config), config.devServer)
.listen(config.port, 'localhost', function(err) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + config.port);
 // console.log('Opening your system browser...');
 // open('http://localhost:' + config.port + '/webpack-dev-server/');

    console.log('Opening Electron app dev mode...');

    shelljs.exec('electron main-dev.js', function(status, output) {
     // console.log('Exit status:', status);
     // console.log('Program output:', output);
    });

});
