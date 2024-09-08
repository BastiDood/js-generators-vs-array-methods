import { run, selectImpl } from './bench.js';

const [_, mode, ...rest] = Deno.args;
if (rest.length > 0)
    throw new Error('too many arguments');

const impl = selectImpl(mode ?? '');

// Load cached random bytes from file,
// but make sure to cast `Uint8Array` as `number[]`.
const RANDOM = Array.from(Deno.readFileSync('random.bin'));

run(RANDOM, impl);
