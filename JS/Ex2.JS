/* Tutorial 4
   Example 2 JavaScript code
*/
console.log("Lee's Output from HW 3 Example 2");

let n;
let x;
n = prompt("Enter your Name")
x = prompt("Enter Number of Units")

if(x < 0) {
console.log("Invalid Grade")
}
else console.log("Hello " + n);
if(x>=0 & x<=30){
console.log("Your grade standing is Freshman");
}

if(x>=31 & x<=60){
console.log("Your grade standing is Sophmore");
}

if(x>=61 & x<=90){
console.log("Your grade standing is Junior");
}

if(x>=91 & x<=120){
console.log("Your grade standing is Senior");
}



