#!/usr/bin/env node

const ASCII_START = 33;  // !
const ASCII_END   = 126; // ~

let length = process.argv[2] || 16;

process.stdout.write(
  String.fromCharCode.apply(
    null,
    Array.apply(
      null,
      { length }).map(n => Math.floor(Math.random() * (ASCII_END - ASCII_START) + 1) + ASCII_START
    )
  )
);
