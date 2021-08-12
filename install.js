const { execSync } = require('child_process');
const fs = require('fs');

function install_win32_deno() {
  execSync(`PowerShell -Command \"$env:DENO_INSTALL='${process.cwd()}'; iwr https://deno.land/x/install/install.ps1 -useb | iex\"`);
}

function install_posix_deno() {
  execSync(`export DENO_INSTALL="${process.cwd()}" && curl -fsSL https://deno.land/x/install/install.sh | sh || wget -o - https://deno.land/x/install/install.sh | sh`);
}

function install_deno() {
  if (process.platform !== 'win32') {
    if (fs.statSync('deno', { throwIfNoEntry: false })?.isFile() || fs.statSync('./bin/deno', { throwIfNoEntry: false })?.isFile()) {
      return;
    } else {
      install_posix_deno();
    }
  } else {
    if (process.platform === 'win32' && fs.statSync('deno.exe', { throwIfNoEntry: false })?.isFile() || fs.statSync('./bin/deno.exe', { throwIfNoEntry: false })?.isFile()) {
      return;
    } else {
      install_win32_deno();
    }
  }
}

install_deno();
