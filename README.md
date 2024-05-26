# String Calculator TDD Kata

This tdd code kata is a simple string calculator that can perform addition on numbers in a string.

## Features

The string calculator has the following features:

1. It can handle an unknown amount of numbers.
2. It allows the add method to handle new lines between numbers.
3. It supports different delimiters.
4. It throws an exception for negative numbers and shows all negative numbers in the error message.
5. It ignores numbers greater than 1000.
6. It can handle different delimiter of any length.
7. It can handle multiple delimiters of different lengths.

## Local Setup

To set up the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/SohilP25/string-calculator-tdd`
2. Navigate into the project directory: `cd string-calculator-tdd`
3. Install the dependencies: `npm install`
4. Run the tests: `npm test`

Please refer to the `setup.txt` file for more detailed setup instructions.

## Technologies Used

This project is built with:

- TypeScript: a typed superset of JavaScript that compiles to plain JavaScript.
- Node.js: a JavaScript runtime built on Chrome's V8 JavaScript engine.
- Jest: a delightful JavaScript Testing Framework with a focus on simplicity.

## Testing

The project uses Jest for testing. The tests cover various scenarios, including handling different delimiters, negative numbers, and numbers greater than 1000. To run the tests, use the command `npm test`.
