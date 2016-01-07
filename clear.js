#!/usr/bin/env node

'use strict';

var readline = require('readline'),
    stream = process.stdin;

readline.cursorTo(stream, 0, 0);
readline.clearScreenDown(stream);