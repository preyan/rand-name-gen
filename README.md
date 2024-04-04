# Random Name GEnerator

[![npm version](https://badge.fury.io/js/rand-name-gen.svg)](https://badge.fury.io/js/rand-name-gen)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Last Commit](https://img.shields.io/github/last-commit/preyan/rand-name-gen)](https://img.shields.io/github/last-commit/preyan/rand-name-gen)

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
console.log(rand.randomName({ title: true, firstName: true, lastName: true })); // Output: { 'Mr. John Doe' }
```

OR

```javascript
import { randomName } from "rand-name-gen";
console.log(randomName({ title: false, firstName: true, lastName: true })); // Output: { 'John Doe' }
console.log(randomName({ title: true, firstName: true, lastName: true })); // Output: { 'Mr. John Doe' }
```

## API

- randomName()

## License

This project is licensed under the MIT License.

## Author

[Preyan Bhowmick](https://github.com/preyan)
