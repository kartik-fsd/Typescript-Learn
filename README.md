# TypeScript Overview

TypeScript is a statically typed superset of JavaScript. It's designed to enhance JavaScript by adding optional static typing, making it a strongly typed language. TypeScript code compiles to plain JavaScript, enabling it to run on any JavaScript runtime or browser.

## Features

- **Static Typing**: TypeScript allows developers to define types for variables, function parameters, return types, etc., which helps catch errors during development and provides better tooling support for code editors.
  
- **Modern JavaScript Features**: Supports modern JavaScript syntax and features like classes, arrow functions, async/await, and modules.

- **Interfaces and Types**: Enables the creation of interfaces and custom types to define object shapes and improve code maintainability.
  
- **Tooling and Editor Support**: Comes with a robust set of tools including a compiler (`tsc`) that compiles TypeScript code to JavaScript, and offers excellent support in code editors like Visual Studio Code, providing intelligent code completion, error-checking, and refactoring capabilities.
  
- **Backward Compatibility**: TypeScript is backward compatible with JavaScript, allowing existing JavaScript code to be gradually migrated to TypeScript.
  
- **Type Inference**: Employs a powerful type inference system that can infer types in many cases without explicit type annotations.


## Data Types in TypeScript

### Primitive Types

- **Boolean**: Represents a logical value, either `true` or `false`.
  
- **Number**: Represents both integer and floating-point numbers.
  
- **String**: Represents a sequence of characters.
  
- **Null**: Represents the intentional absence of any value.
  
- **Undefined**: Represents a variable declared but not assigned a value.
  
- **Symbol** (added in ES6/TypeScript): Represents a unique and immutable value used as an identifier for object properties.

### Non-Primitive or Reference Types

- **Object**: Represents instances through which properties and methods can be accessed.
  
- **Array**: A special object used to store a list of elements.
  
- **Function**: A callable object that executes a block of code.
  
- **Date**: Represents dates and times.
  
- **RegExp**: Represents regular expressions for pattern matching.
  
- **Custom Objects**: Objects created using constructors or classes.


###

### Example of TypeScript Data Types

```typescript
### Example of Primitive Types
let isTrue: boolean = true;
let age: number = 25;
let greeting: string = 'Hello, world!';
let nothing: null = null;
let notDefined: undefined = undefined;
let sym: symbol = Symbol('id');

let user: object = { name: 'John', age: 30 };
let numbers: number[] = [1, 2, 3, 4, 5];
let sayHello: Function = () => {
    console.log('Hello!');
};
let currentDate: Date = new Date();
let regexPattern: RegExp = /[a-zA-Z]+/;


### Example of Non-Primitive Types

```typescript
let user: object = { name: 'John', age: 30 };
let numbers: number[] = [1, 2, 3, 4, 5];
let sayHello: Function = () => {
    console.log('Hello!');
};
let currentDate: Date = new Date();
let regexPattern: RegExp = /[a-zA-Z]+/;
