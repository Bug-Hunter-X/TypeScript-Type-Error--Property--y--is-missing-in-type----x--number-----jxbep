# TypeScript Type Error Bug

This repository demonstrates a common, yet subtle, type error in TypeScript related to object literal types. The `printCoord` function expects an object with both `x` and `y` properties. However, if you provide an object missing one of these, TypeScript won't necessarily throw an error during compilation in all cases, leading to unexpected runtime behavior.  This example illustrates the issue and provides a solution to make the type checking more robust.

## How to Reproduce

1. Clone this repository.
2. Compile the `bug.ts` file using the TypeScript compiler (tsc).
3. Observe that it compiles without errors even though the object literal does not perfectly match the function's type signature.
4. Run the compiled JavaScript code; you will see that the code may not work as expected.

## Solution

The `bugSolution.ts` file demonstrates a corrected version.  This is done by implementing stricter type checks and handling potential missing properties more explicitly.

## Learning Points

This example highlights the importance of understanding how TypeScript infers types and how to ensure type safety through more explicit typing techniques.