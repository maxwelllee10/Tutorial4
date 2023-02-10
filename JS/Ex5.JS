/* Tutorial 4
   Example 5 JavaScript code
*/
console.log("Lee's Output from HW 3 Example 5");

let password;
let tries = 1;

password = prompt("You entered the correct password");


while (password !== "secret" && tries < 3)  {
   password = prompt(`Enter the password again`);
   tries++;
} 

if (password === "secret"){
   console.log("You entered the correct password after ", tries, " attempts")
}  else {
   console.log("Your account is locked!  You failed to enter the correct password ", tries, "times")
}
// else {
//    while (tries <= 3) {
//       prompt("Enter password again")
//    tries ++;
//    }
//    wrong ++;
// }
// {
// if (wrong == 3);
// result = console.log("Your account is locked") 
// }


