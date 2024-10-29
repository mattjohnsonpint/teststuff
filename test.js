const isatty = require('tty').isatty;
const process = require('process');

console.log("stdin", isatty(process.stdin.fd));
console.log("stdout", isatty(process.stdout.fd));
console.log("stderr", isatty(process.stderr.fd));
