const { spawnSync } = require('child_process');

function deno(args) {
  let exitCode = 0;
  try {
    if (process.platform === 'win32') {
      exitCode = spawnSync('deno.exe', args, { stdio: 'inherit', stdout: 'inherit', stderr: 'inherit' }).status || 0;
    } else {
      exitCode = spawnSync('./deno', args, { stdio: 'inherit', stdout: 'inherit', stderr: 'inherit' }).status || 0;
    }
  } catch(ex) {
    console.log(ex);
    exitCode = -1;
  }
  return exitCode;
}

module.exports = deno;
