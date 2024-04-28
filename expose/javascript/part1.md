# Part 1
1. 'values added: 20'
2. 'final result: 20'
3. 'values added: 20'
4. Error - Line 13 tries to access `result`, a `let` variable that is defined in the if-statement. `let` variables are limited to block scope, meaning they can only be accessed in the block they are defined in, and since line 13 is outside of `result`'s block (the if-statement), then it cannot access `result`, leading to the error.
5. Error - `const` variables cannot be reassigned, which line 7 attempts to do, so line 9 results in an error. 
6. Error - Besides the reasoning provided in 5, `const` variables have the same scope as `let` variables - block scope. Thus, line 13 cannot access `result`.