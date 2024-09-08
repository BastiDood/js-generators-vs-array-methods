# JavaScript Generators vs. Array Methods

<!-- TODO: add link to the article -->

The repository for all the scripts, notebooks, results, and analyses related to my experiments on JavaScript generators and chained array methods. See the full article "I was wrong about array methods and generators..." for more details on the methodology, results, interpretations, and conclusions.

## Generating Random Bytes

The first step is to generate 32 KiB of random data. There are many ways to do this, but I opted to generate them via the [`Crypto#getRandomValues`] function in JavaScript. A Deno script is already available at [`random/random.js`].

[`Crypto#getRandomValues`]: https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues
[`random/random.js`]: random/random.js

```bash
# This will overwrite the already existing `random.bin` file!
deno run random/random.js
```

## Running the Experiments

```bash
# Node.js
function run () { node --experimental-default-type=module benchmark/bench.node.js $1 > notebook/node/$1.csv; }
run raw-for-loop
run for-of-loop
run array-method
run generator
```

```bash
# Deno
function run () { deno --quiet --allow-read --allow-hrtime benchmark/bench.deno.js -- $1 > notebook/deno/$1.csv; }
run raw-for-loop
run for-of-loop
run array-method
run generator
```

```bash
# Bun
function run () { bun --silent benchmark/bench.bun.js $1 > notebook/bun/$1.csv; }
run raw-for-loop
run for-of-loop
run array-method
run generator
```

## Analyzing the Data

The Python notebook containing the data analysis is located at [`notebook/analysis.ipynb`].

[`notebook/analysis.ipynb`]: notebook/analysis.ipynb

```bash
conda env create --file notebook/environment.yml
conda activate js-generators-vs-array-methods
# You may now run the Python notebook.
```
