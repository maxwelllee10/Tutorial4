/* Tutorial 4
   Example 1 JavaScript code
*/
console.log("Lee's Output from HW 3 Example 1");

let number;
number = Number(prompt("Enter a number between 1 - 100:"));
if (isNaN(number)) {
   console.log("Is not a number")
} else if ((number < 1) || (number > 100)) {
   console.log(`${number} is not a valid number`);
 }
else {
   console.log(`Thank you! You entered ${number} a valid number`);
}