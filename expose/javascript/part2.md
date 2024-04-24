1. Line 12 will print 3. Since ```i``` is outside the for-loop, it is ```prices.length```, since that is the value that stops the for-loop. 
2. Line 13 will print 150. Since ```discountedPrice``` is updated every for-loop, then it contains ```prices[i]*(1-discount)``` where ```prices[i]``` is the number in the last index of ```prices```. 
3. Line 14 will print 150. This is because ```discountedPrice``` is 150, as stated in 2, and ```Math.round(150*100)/100``` is 150. 
4. The function will return ```discounted``` which is ```[50, 100, 150]```, however since ```discounted``` was not logged to the console, it will not appear in the console. 
5. Line 12 will result in an error because ```i``` is defined within the for-loop and it is a ```let``` variable, so line 12 cannot access it. 
6. Again, line 13 will result in an error because ```discountedPrice``` is defined within the for-loop and it is a ```let``` variable so line 13 cannot access it. 
7. Line 14 will print 150. ```let finalPrice``` was defined in the same block as line 14. 
8. The function will return ```discounted``` (again ```[50,100,150]```), though the program will not output/print anything. It is able to return ```discounted``` because ```let discounted``` was defined in the same block as the return line. 
9. Similar to 5, the program will error because line 11 is outside the scope where ```let i``` was defined. 
10. Line 12 will print 3, as ```const length``` was defined in the same scope as line 12, and there was no attempt to reassign a value to the variable. 
11. Similar to 4 and 8, the function will return ```discounted``` but not print it (i.e. if it were to be stored in a variable, the variable would contain ```[50,100,150]```). 
12. Notations 
    * A: student.name
    * B: student['Grad Year']
    * C: student.greeting()
    * D: student['Favorite Teacher'].name
    * E: student.courseLoad[0]