# Part 2
1. Line 12 will print **3**. Since `i` is outside the for-loop, it is `prices.length`, since that is the value that stops the for-loop. 
2. Line 13 will print **150**. Since `discountedPrice` is updated every for-loop, then it contains `prices[i]*(1-discount)` where `prices[i]` is the number in the last index of `prices`. 
3. Line 14 will print **150**. This is because `discountedPrice` is 150, as stated in 2, and `Math.round(150*100)/100` is 150. 
4. The function will return **```discounted```** which is `[50, 100, 150]`, however since `discounted` was not logged to the console, it will not appear in the console. 
5. Line 12 will result in an **error** because `i` is defined within the for-loop and it is a `let` variable, so line 12 cannot access it. 
6. Again, line 13 will result in an **error** because `discountedPrice` is defined within the for-loop and it is a `let` variable so line 13 cannot access it. 
7. Line 14 will print **150**. `let finalPrice` was defined in the same block as line 14. 
8. The function will return **`discounted`** (again `[50,100,150]`), though the program will not output/print anything. It is able to return `discounted` because `let discounted` was defined in the same block as the return line. 
9. Similar to 5, the program will **error** because line 11 is outside the scope where `let i` was defined. 
10. Line 12 will print **3**, as `const length` was defined in the same scope as line 12, and there was no attempt to reassign a value to the variable. 
11. Similar to 4 and 8, the function will return **`discounted`** but not print it (i.e. if it were to be stored in a variable, the variable would contain `[50,100,150]`). 
12. Notations 
    * A: student.name
    * B: student['Grad Year']
    * C: student.greeting()
    * D: student['Favorite Teacher'].name
    * E: student.courseLoad[0]
13. Arithmetic 
    * A: '32' - integers map to their exact string representation 
    * B: 1 - the string '3' is read as the  number 3 and 3-2=1
    * C: 3 - `null` takes the value of 0 in numeric conversion so 3+0=3
    * D: '3null' - `null` becomes 'null' in string conversion 
    * E: 4 - `true` has a value of 1 under numeric conversion so 3+1=4
    * F: 3 -  `false` has a value of 0 under numeric conversion so 3+0=3
    * G: '3undefined' - the string conversion of `undefined` becomes 'undefined'
    * H: NaN - the subtraction operation errors with a string and `undefined`
14. Comparisons 
    * A: true - '2' becomes 2 in numeric conversion 
    * B: false - strings are compared character-by-character, so since '2' is greater than '1',  '2' > '12'
    * C: true - '2' becomes 2 in numeric conversion 
    * D: false - 2 and '2' are of different types, and `===` does not convert types before comparing 
    * E: true - 2 becomes `true`
    * F: true - Boolean(2) becomes `true`
15. `a === b` compares a and b without making a type conversion - so if a and b are different types, it will automatically return `false`. On the other hand, `a == b` makes the equality comparison after converting a and b to the same type, if it is possible to do so. 
16. In **part2-question16.js**. The output is 
    ```
    21
    45
    5
    2
    ```
17. The result is `[2, 4, 6]`. The array `[1, 2, 3]` is run through the `modifyArray` function, which takes two inputs: `array` and `callback`. It essentially calls the `callback` function, which in this case is the `doSomething` function, on each element of `array`. In this case, `doSomething` doubles its input. Thus, each element of `array` is multiplied by 2 - `[2,4,6]`.  
18. In **part2-question18.js**.
19. The output is 
    ```
    1
    4
    3
    2
    ```
    This is because `setTimeout(function, delay)` executes a `function` when the timer, which is set by `delay` seconds, runs out. Thus, 2 is printed after 1000 milliseconds and thus last. 3 is printed in the next event cycle - second to last, and 1 and 4 are printed immediately. 