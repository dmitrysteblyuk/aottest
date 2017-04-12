# Test AoT compilation and Rollup

This project contains two test apps. They both do nothing but show "App works!" in browser. First imports FormsModule and the other doesn't (neither uses it actually). The goal is to achieve that after tree shaking the compiled bundles would be of roughly same size. Now the one with FormsModule is larger by ~70kB which is the size of whole FormsModule minified.

## Build

Run `npm run build` to build both apps (with FormsModule imported and without).
