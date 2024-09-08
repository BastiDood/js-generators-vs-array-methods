import { run, selectImpl } from './bench.js';
import process from 'node:process';
import { readFileSync } from 'node:fs';

const [_node, _file, mode, ...rest] = process.argv;
if (rest.length > 0)
    throw new Error('too many arguments');

const impl = selectImpl(mode ?? '');

// Load cached random bytes from file,
// but make sure to cast `Uint8Array` as `number[]`.
const RANDOM = Array.from(readFileSync('random.bin'));

run(RANDOM, impl);
