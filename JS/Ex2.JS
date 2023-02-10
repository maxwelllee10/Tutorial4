/* Tutorial 4
   Example 2 JavaScript code
*/
console.log("Lee's Output from HW 3 Example 2");

let n;
let U;
n = prompt("Enter your Name")
uEntered = prompt("Enter Number of Units");

U = Number(uEntered);

// Validate input
if (!Number.isInteger(U)) {
   console.log("You didn't enter an iteger");
} else {
   console.log(`Hello ${n}`);
   // Perform Grade Standing logic
   if (U < 0) {
      console.log("You must enter a valid number of units.  Cannot be negative!");
   } else if (U < 31) {
      console.log("Your grade standing is Freshman");
   } else if (U < 61) {
      console.log("Your grade standing is Sophmore");
   } else if (U < 91) {
      console.log("Your grade standing is Junior");
   } else {
      console.log("Your grade standing is Senior");
   }


}


// console.log(`You entered this many units: ${U}`)


// //else console.log("Hello " + n);
// if(U>=0 & U<=30){
// console.log("Your grade standing is Freshman");
// }

// if(U>=31 & U<=60){
// console.log("Your grade standing is Sophmore");
// }

// if(U>=61 & U<=90){
// console.log("Your grade standing is Junior");
// }

// if(U>=91 & U<=120){
// console.log("Your grade standing is Senior");
// }



