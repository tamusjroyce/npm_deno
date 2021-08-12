const { spawnSync } = require('child_process');

function deno(args) {
  let exitCode = 0;
  try {
    const denoExe = process.platform === 'win32' ? 'deno.exe' : 'deno';
    exitCode = spawnSync(`./node_modules/npm_deno/bin/${denoExe}`, args, { stdio: 'inherit', stdout: 'inherit', stderr: 'inherit' }).status || 0;
  } catch(ex) {
    console.log(ex);
    exitCode = -1;
  }
  return exitCode;
}

module.exports = deno;
