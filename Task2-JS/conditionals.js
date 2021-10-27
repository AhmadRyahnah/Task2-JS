/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
   function largenum(num1, num2) {
            if (num1 > num2) {
                console.log(num1 + "-is Larger");
            } else {
                console.log(num2 + "-is Larger");
            }
        }
        largenum(51, 8);


 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
       let n = -20;
        if (n < 0) {
            console.log("The sign is -");
        } else {
            console.log("The sign is +");
        }


 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
   let m = 0;
        let u = -1;
        let w = 4;
        if (m > u && m > w) {
            switch (true) {
                case (u > w):
                    console.log(`${m} , ${u} , ${w}`);
                    break;
                case (u < w):
                    console.log(`${m} , ${w} , ${u}`);
                    break;
            }
        } else if (u > m && u > w) {

            switch (true) {
                case (m > w):
                    console.log(`${u} , ${m} , ${w}`);
                    break;
                case (w > m):
                    console.log(`${u} , ${w} , ${m}`);
                    break;
            }
        } else if (w > m && w > u) {
            switch (true) {
                case (u > m):
                    console.log(`${w} , ${u} , ${m}`);
                    break;
                case (u < m):
                    console.log(`${w} , ${m} , ${u}`);
                    break;
            }
        }
 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
        let x = -5;
        let y = -2;
        let z = -6;
        let i = 0;
        let j = -1;
        switch (true) {
            case (x > y && x > z && x > i && x > j):
                console.log(x)
                break;
            case (y > x && y > z && y > i && y > j):
                console.log(y)
                break;
            case (z > y && z > x && z > i && z > j):
                console.log(z)
                break;
            case (i > y && i > z && i > x && i > j):
                console.log(i)
                break;
            case (j > y && j > z && j > i && j > x):
                console.log(j)
                break;
        }
 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
        let x = 0;
        let y = 1;
        if (x > y) {
            console.log("Hello World ❤");
        } else {
            console.log("Goodbye ❤");
        }
 /******* End Your Code ********* */



