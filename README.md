# Utility Toolkit

Utility Toolkit is a JavaScript package providing a collection of utility functions for common tasks.

## Installation

You can install the Utility Toolkit package via npm:

```bash
npm install --save js-toolkit-apollo156
```

## Usage

```javascript
const UtilityToolkit = require('utility-toolkit');

// Capitalize the first letter of a string
console.log(UtilityToolkit.capitalizeFirstLetter('hello')); // Output: Hello

// Check if a number is even
console.log(UtilityToolkit.isEven(4)); // Output: true

// Check if a number is odd
console.log(UtilityToolkit.isOdd(5)); // Output: true

// Generate a random integer between 1 and 10
console.log(UtilityToolkit.randomInt(1, 10)); // Output: (random number between 1 and 10)

// Shuffle an array
const array = [1, 2, 3, 4, 5];
console.log(UtilityToolkit.shuffleArray(array)); // Output: (shuffled array)
```

## Functions

- `capitalizeFirstLetter(str)`: Capitalizes the first letter of a string.
- `isEven(num)`: Checks if a number is even.
- `isOdd(num)`: Checks if a number is odd.
- `randomInt(min, max)`: Generates a random integer between `min` and `max` (inclusive).
- `shuffleArray(array)`: Shuffles the elements of an array.

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
