#!/usr/bin/env node
const deno = require('../denolib.js');
let exitCode = deno(process.argv.slice(2));
if (exitCode !== 0) {
  console.log('exit code:', exitCode);
  console.log('');
  console.log('Be sure to use node v16+, as npx has a bug that doesn\'t support command line arguments containing quotes with spaces.');
  console.log('This is acceptable. As the purpose of this library is to grow adoption of deno so it can replace node.');
  console.log('Node is great. But bugs with LTS 14.x are no longer being supported. why?');
  console.log('');
}
process.exit(exitCode);
