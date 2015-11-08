/**
 * Created by albertoclarit on 11/8/15.
 */
/*eslint no-console:0 */
var shelljs=require('shelljs');

var os = process.platform; // 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'

console.info("Generating executable file for " + os);

if(os === 'darwin'){

  var status = shelljs.exec('npm run copy && webpack --env=dist && ' +
    'ncp ./node_modules/electron-prebuilt/dist ./deployments/osx && ' +
    'copyfiles -f ./package.json ./main.js  ./dist && '  +
    'asar p  ./dist ./deployments/osx/Electron.app/Contents/Resources/app.asar ' , {silent:false}).code;

  if(status != 0)
  console.log('Command has failed.!!!!!');
}
else {
  var status = shelljs.exec('npm run copy && webpack --env=dist && ' +
    'ncp ./node_modules/electron-prebuilt/dist ./deployments/windows_linux && ' +
    'copyfiles -f ./package.json ./main.js  ./dist && '  +
    'asar p  ./dist ./deployments/windows_linux/resources/app.asar ' , {silent:false}).code;

  if(status != 0)
    console.log('Command has failed.!!!!!');
}

/*var status = shelljs.exec('npm run copy && webpack --env=dist && ' +
  'copyfiles -f ./node_modules/electron-prebuilt/dist  ./deployments/osx && ' +
  'asar p ./dist ./deployments/osx/Electron.app/Contents/Resources/app.asar', {silent:false}).code;*/

//shelljs.exec(' && asar p ./dist ./deployments/app.asar', function(status, output) {
  // console.log('Exit status:', status);
  // console.log('Program output:', output);
//});
