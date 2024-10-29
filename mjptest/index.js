#!/usr/bin/env node

import { isatty } from "node:tty";
import process from "node:process";

console.log("stdin", isatty(process.stdin.fd));
console.log("stdout", isatty(process.stdout.fd));
console.log("stderr", isatty(process.stderr.fd));
