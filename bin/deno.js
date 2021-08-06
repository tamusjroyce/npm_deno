const { spawnSync } = require('child_process');
const child = spawnSync('deno.exe', process.argv.slice(2), { stdio: 'inherit', stdout: 'inherit', stderr: 'inherit' });
process.exit(child.exitCode);
