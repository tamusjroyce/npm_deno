https://github.com/kt3k/deno-bin - this is probably a better library and setup. Funny how you can never find the right library with the flood of npm modules out there.
Work in progress: I will be migrating to this library and building examples that utilize this library.

# npm install deno as a npm_module library
```
                __
               /._) 
      _.----._/ / 
     /         / 
  __/ (  | (  | 
 /__.-'|_|--|_| 
```
[Deno](https://deno.land/) installed to node_modules

### What is deno?
Node-like tool written in rust and provides binary/native speed improvements and security improvements.
It is written and supported by the creator of node, Ryan Dahl.

Migrating and adopting Deno
- lint speed improvements - I recommend - https://github.com/napi-rs/node-rs/
- source -> micro-utilities
- node supported pipelines

Steps to run:
```
npm install --save-dev npm_deno
npm run example
cd example
npx deno eval "console.log('perfection');"
npx deno compile

# or REM Note: the extra -- by itself is required for deno (at least for the way deno v1.13.0 is installed)
npx deno eval "const contents = Deno.writeTextFile('cat.ts', 'const contents = await Promise.all(Deno.args.map(function(a) { return Deno.readTextFile(a); })); console.log(contents.join(\"\r\n\"));');" -- --allow-write
npx deno compile --allow-read cat.ts

# or REM let's run our deno built executable
./cat cat.ts
or
cat.exe cat.ts
```

Supports posix/linux/mac and windows
