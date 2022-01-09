//  Setting and Swapping
let myNumber = 42;
let myName = "Chris";
let temp = myName;
myName = myNumber;
myNumber = temp;
console.log(`My name is ${myNumber} and my number is ${myName}`);

// // Print -52 to 1066
// for(let i = -52; i<=1066; i++){
//     console.log(`Integer is ${i}`);
// }

// Don't Worry, Be Happy
// function beCheerful() {
//     console.log("Good Morning");
// }
// for(let i =0; i<=98; i++){
//     beCheerful();
// }
// function beCheerful(timesToBeCheerful){
//     for(let i = 0; i<=timesToBeCheerful; i++) {
//         console.log(`good morning ${i}`);
//     }
// } 
// beCheerful(98)

// Multiples of Three - but Not All
// for(let i = -300; i<=0; i++) {
//     if( i%3 === 0){
//         if(i === -3 || i === -6){
//             continue;
//         } else {
//             console.log(`Integer ${i}`);
//         }
//     }
// }

// Printing Integers with While
// let i = 2000;
// while(i<=5280) {
//     console.log(`int is ${i}`);
//     i++
// }

// You Say It's Your Birthday
// function birthday(num1, num2) {
//     if((num1===3 && num2===25) || (num1===25 && num2===3)) {
//         console.log("how did you know?");
//     } else {
//         console.log("Just another day");
//     }
// }

// birthday(2, 4);
// birthday(3, 25);
// birthday(25, 3);
// birthday(0, 2);

// Leap Year
// function isItALeapYear(year) {
//     if(year%4===0) {
//         if(year%100===0){
//             if(year%400===0){
//                 console.log("It's a leap year 400");
//             } else {
//                 console.log("It's not a leap year 100");
//             }
//         } else {
//             console.log("It's a leap year 4")
//         }
//     } else {
//         console.log("It's not a leap year")
//     }
// }

// isItALeapYear(1990);
// isItALeapYear(1991);
// isItALeapYear(1992);
// isItALeapYear(1993);
// isItALeapYear(1994);
// isItALeapYear(2000);
// isItALeapYear(2100);
// isItALeapYear(4);
// isItALeapYear(2400);

// Print and Count
// function divBy5(minNumber, maxNumber) {
//     count = 0;
//     for(let i = minNumber; i<=maxNumber; i++) {
//         if(i%5===0) {
//             console.log(`int is ${i}`);
//             count++;
//         } else {
//             continue;
//         }
//     }
//     console.log(count);
// }

// divBy5(512, 4096);

// Multiples of 6
// function multipleOf6(minNumber, maxNumber) {
//     if(minNumber<maxNumber){
//         let int = minNumber;
//         while(int<=maxNumber) {
//             if(int%6===0) {
//                 console.log(int);
//                 int++;
//             } else {
//                 int++;
//             }
//         }
//     }else {
//         console.log("first number must be less than the second number to run this function!")
//     }
// }
// // multipleOf6(6, 60000);
// multipleOf6(6, 6000);

// Counting the Dojo Way
// function countTheDojoWay() {
//     for(let i = 1; i<=100; i++) {
//         if(i%5===0) {
//             if(i%10===0) {
//                 console.log("Coding Dojo");
//             } else {
//                 console.log("Coding")
//             }
//         } else {
//             console.log(`${i}`);
//         }
//     }
// }
// countTheDojoWay();

// What do you know?
// function logParameter(parameter) {
//     console.log(parameter);
// }
// logParameter("incoming");

// Whoa, That Sucker's Huge...
// const oddAdd = (minNumber, maxNumber) => {
//     let sum = 0;
//     if(minNumber<maxNumber) {
//         for(let i = minNumber; i<=maxNumber; i++) {
//             if(i%2===0) {
//                 sum=sum+i;
//             }
//         }
//         console.log(sum);
//     }
// }
// oddAdd(-300000, 300000);

// Countdown by fours
// const countDownByFours = () => {
//     let i = 2016;
//     while(i>0) {
//         console.log(i);
//         i=i-4;
//     }
// }
// countDownByFours();

// Flexible Countdown
// const flexCountdown = (lowNum, highNum, multiple) => {
    
//     if(lowNum<highNum) {
//         for(let i = highNum; i>=lowNum; i--) {
//             if(i%multiple===0) {
//                 console.log(i);
//             }
//         }
//     } else {
//         console.log("Enter values in order of lower number, higher number, multiple")
//     }
// }

// flexCountdown(2,9,3);
// flexCountdown(20, 987, 4);
// flexCountdown(2, 50, 2);

// The Final Countdown
// print multiples of 1 starting at 2 ending at 3 and skipping 4
const finalCountdown = (param1, param2, param3, param4) => {
    if(param1<=param3 && param2<param3) {
        let counter = param2;
        while(counter<=param3) {
            if(counter!==param4) {
                if(counter%param1===0) {
                    console.log(counter);
                    counter++
                } else {
                    counter++;
                }
            } else {
                counter++;
            }
        }
    } else {
        console.log("First and Second Parameters must be less than the 3rd parameter.");
    }
}

// finalCountdown(3,5,17,9);
finalCountdown(12,10,270,24);