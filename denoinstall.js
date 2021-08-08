const { execSync } = require('child_process');
const fs = require('fs');

function install_deno() {
  if (fs.statSync('deno', { throwIfNoEntry: false })?.isFile() || fs.statSync('deno.exe', { throwIfNoEntry: false })?.isFile() ||
      fs.statSync('./bin/deno', { throwIfNoEntry: false })?.isFile() || fs.statSync('./bin/deno.exe', { throwIfNoEntry: false })?.isFile()) {
    return 0;
  }
  if (process.platform === 'win32') {
    execSync(`PowerShell -Command \"$env:DENO_INSTALL='${process.cwd()}'; iwr https://deno.land/x/install/install.ps1 -useb | iex\"`);
  } else {
    execSync(`export DENO_INSTALL="${process.cwd()}" && curl -fsSL https://deno.land/x/install/install.sh | sh || wget -o - https://deno.land/x/install/install.sh | sh`);
  }
  return 1;
}
install_deno();
module.exports = install_deno;
