/* Tutorial 4
   Example 7 JavaScript code
*/
console.log("Lee's Output from HW 3 Example 7");

let hour;
let min;
let sec;

hour = Number(prompt("Enter the time only hours"));
min = Number(prompt("Enter the amount of minutes"));
sec = Number(prompt("Enter the amount of seconds"));

if (Number.isInteger(hour) && hour <= 23 && hour >= 0
   && Number.isInteger(min) && min <= 59 && min >= 0
   && Number.isInteger(sec) && sec <= 59 && sec >= 0
 )
{
   if (sec === 59) {
      // secTime = console.log(`Time input: ${sec}s`)
      sec = 0;
      min++;

      if (min === 60) {
         min = 0;
         hour++;
      }
      if (hour === 23) {
         hour = 0;
      }
   } else {
      sec++;
   }
   console.log("hour ", hour, "Min ", min, "Sec ", sec)
} else {
   console.log("Invalid data")
}

// if (min === 59){
//  updateTime = console.log(`${secTime} ${min}m`)
//    min = 0;
//    hour ++;
// }
// if (hour === 23){
//    console.log(`${updateTime} ${hour}h`)
//    min = 0;
//    hour ++;
// }
// else 