const fs = require('fs');
const escape = require('escape-html');

const bookmarklet = fs.readFileSync('dist/watch-along-stopwatch.iife.js', 'utf8');
let html = fs.readFileSync('dist/index.html', 'utf8');

html = html.replaceAll('<%= bookmarklet %>', escape(bookmarklet));

fs.writeFileSync('dist/index.html', html);
