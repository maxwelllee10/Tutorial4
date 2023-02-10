/* Tutorial 4
   Example 3 JavaScript code
*/
console.log("Lee's Output from HW 3 Example 3");

let day;
let nextDay;
day = prompt("Enter day of the week in 3 letter format")
//validate day

let daysList = {
   0: "sun",
   1: "mon",
   2: "tue",
   3: "wed",
   4: "thu",
   5: "fri",
   6: "sat"
};

let output = day;
function nextDay() {
   let day = nextDay.value;
   switch (day) {
      case "sun":
         day = daysList[0];
         followingDay = daysList[1];
         break;
      case "mon":
         day = daysList[1];
         followingDay = daysList[2];
         break;
      case "tue":
         day = daysList[2];
         followingDay = daysList[3];
         break;
      case "wed":
         day = daysList[3];
         followingDay = daysList[4];
         break;
      case "thu":
         day = daysList[4];
         followingDay = daysList[5];
         break;
      case "fri":
         day = daysList[5];
         followingDay = daysList[6];
         break;
      case "sat":
         day = daysList[6];
         followingDay = daysList[0];
         break;
      default:
         prompt("Enter Valid input ");
         break;
   }









// let day;
// let nextDay;
// day = prompt("Enter day of the week in 3 letter format")
// //validate day

// if (day != 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun');{
//    console.log("You entered an invalid day")
// } 
// if (day == "mon") {
//    console.log(`You entered: ${day}`);
//    nextDay = console.log("The following day is: " + "tue");
// }
// else if (day == "tue") {
//    console.log(`You entered: ${day}`);
//    nextDay = console.log("The following day is: " + "wed");
// }
// else if (day == "wed") {
//    console.log(`You entered: ${day}`);
//    nextDay = console.log("The following day is: " + "thu");
// }
// else if (day == "thu") {
//    console.log(`You entered: ${day}`);
//    nextDay = console.log("The following day is: " + "fri");
// }
// else if (day == "sat") {
//    console.log(`You entered: ${day}`);
//    nextDay = console.log("The following day is: " + "sun");
// }
// else if (day == "sun") {
//    console.log(`You entered: ${day}`);
//    nextDay = console.log("The following day is: " + "mon");
// }
