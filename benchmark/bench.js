/** @param {number[]} nums */
function rawForLoop(nums) {
    /** @type {number[]} */
    const output = [];
    for (let i = 0; i < nums.length; ++i) {
        const num = nums[i];
        if (num <= 127)
            output.push(num / 127);
    }
    return output;
}

/** @param {number[]} nums */
function forOfLoop(nums) {
    /** @type {number[]} */
    const output = [];
    for (const num of nums)
        if (num <= 127)
            output.push(num / 127);
    return output;
}

/** @param {number[]} nums */
function arrayMethod(nums) {
    return nums.filter(num => num <= 127).map(num => num / 127);
}

/** @param {number[]} nums */
function* generatorImpl(nums) {
    for (const num of nums)
        if (num <= 127)
            yield num / 127;
}

/** @param {number[]} nums */
function generator(nums) {
    return Array.from(generatorImpl(nums));
}

/** @param {string} mode */
export function selectImpl(mode) {
    switch (mode) {
        case 'raw-for-loop':
            return rawForLoop;
        case 'for-of-loop':
            return forOfLoop;
        case 'array-method':
            return arrayMethod;
        case 'generator':
            return generator;
        default:
            throw new Error('unknown benchmark');
    }
}

/**
 * @param {number[]} bytes
 * @param {ReturnType<typeof selectImpl>} impl
 */
export function run(bytes, impl) {
    // Warm up the cache for 2048 iterations
    for (let i = 0; i < 2048; ++i)
        impl(bytes);

    // Do the actual experiment for 16384 iterations
    for (let i = 0; i < 16384; ++i) {
        const start = performance.now();
        impl(bytes);
        const end = performance.now();
        console.log(end - start);
    }
}
