const { spawnSync, execSync } = require('child_process');
const fs = require('fs');

function install_deno() {
  try {
    execSync('npm run force-install');
    return 0;
  } catch(ex) {
    console.log(ex);
  }
  return 1;
}
function tryDeno(args) {
  let exitCode = 0;
  try {
    exitCode = spawnSync('deno', args, { stdio: 'inherit', stdout: 'inherit', stderr: 'inherit' }).status || 0;
  } catch(ex) {
    console.log(ex);
    exitCode = -1;
  }
  return exitCode;
}
function deno(args) {
  if (!fs.statSync('deno', { throwIfNoEntry: false })?.isFile() && !fs.statSync('deno.exe', { throwIfNoEntry: false })?.isFile() &&
      !fs.statSync('./bin/deno', { throwIfNoEntry: false })?.isFile() && !fs.statSync('./bin/deno.exe', { throwIfNoEntry: false })?.isFile()) {
    install_deno();
  }
  let exitCode = tryDeno(args);
  return exitCode;
}
module.exports = deno;
