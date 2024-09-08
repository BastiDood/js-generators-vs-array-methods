import { run, selectImpl } from './bench.js';

const [_exe, _file, mode, ...rest] = Bun.argv;
if (rest.length > 0)
    throw new Error('too many arguments');

const impl = selectImpl(mode ?? '');

// Load cached random bytes from file,
// but make sure to cast `Uint8Array` as `number[]`.
const RANDOM = Array.from(await Bun.file('random.bin').bytes());

run(RANDOM, impl);
