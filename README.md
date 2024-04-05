# Random Name GEnerator

[![NPM Version](https://img.shields.io/npm/v/rand-name-gen)](https://img.shields.io/npm/v/rand-name-gen)
[![license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dt/rand-name-gen)](https://img.shields.io/npm/dt/rand-name-gen)

<div align="center">
    <img src="./assets/logo.png" alt="Logo" width="500">
</div>

## Description

`rand-name-gen` is a simple and lightweight npm package for generating random names.

## Installation

Install the package with npm:

```sh
npm install rand-name-gen
```

## Usage

```javascript
const rand = require("rand-name-gen");

console.log(rand.randomName()); // Output: { 'John Doe' }
console.log(rand.randomName({ title: true })); // Output: { 'Mr. John Doe' }
console.log(rand.randomName({ firstName: true })); // Output: { 'John' }
console.log(rand.randomName({ lastName: true })); // Output: { 'Doe' }
```

OR

```javascript
import { randomName } from "rand-name-gen";

console.log(randomName({ firstName: true, lastName: true })); // Output: { 'John Doe' }
console.log(randomName({ title: true, firstName: true })); // Output: { 'Mr. John' }
console.log(randomName({ title: true, firstName: true, lastName: true })); // Output: { 'Mr. John Doe' }
```

## API

- randomName()

## License

This project is licensed under the MIT License.

## Author

[Preyan Bhowmick](https://github.com/preyan)
