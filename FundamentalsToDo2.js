// Countdown
// const countdown = (number) => {
//     let countdownArray = [];
//     for(let i = number; i>=0; i--) {
//         countdownArray.push(i);
//     }
//     return countdownArray;
// } 
// console.log(countdown(23));

// Print and Return
// const printAndReturn = (arr) => {
//     console.log(`Logged inside the function ${arr[0]}`);
//     return(arr[1]);
// }
// let num = printAndReturn([4,9]);
// console.log(`the returned number is ${num} `);

// First Plus Length
// const firstPlusLength = (arr) => {
//     let sum = arr[0] + arr.length;
//     return sum;
// }
// console.log(firstPlusLength([false,3,5,8,65]));
// if the first item is a string it just puts the number on the end
// if the first item is a bool it adds 1 for true and nothing for false to length
// because false = 0 and true = 1 binary 

// Values Greater Than Second, Generalized
// const valuesGreaterThan2ndIndex = (arr) => {
//     let greaterValuesArr = [];
//     let count = 0;
//     if(arr.length>1){
//         for(let i = 0; i<=arr.length; i++) {
//             if(arr[i]>arr[1]) {
//                 greaterValuesArr.push(arr[i]);
//                 count++;
//             }
//         }
//         console.log(count);
//         return(greaterValuesArr);
//     } else {
//         let error = "You must give an array of more than 1 item for this to work";
//         return(error);
//     }
    
// }
// let greaterValuesArr = valuesGreaterThan2ndIndex([2,4,5,1,3,8,1,9]);
// console.log(greaterValuesArr);
// let testArr = valuesGreaterThan2ndIndex([1]);
// console.log(testArr);

// This Length that value
// const lengthValue = (arr) => {
//     let newArr = []
//     if(arr[0]===arr[1]) {
//         console.log("Jinx");
//         for(let i = 0; i<arr[0]; i++) {
//             newArr.push(arr[1]);
//         }
//         return(newArr);
//     } else {
//         for(let i = 0; i<arr[0]; i++) {
//             newArr.push(arr[1]);
//         }
//         return(newArr);
//     }
// }
// let newArr = lengthValue([3, 8]);
// console.log(newArr);

// Fit the First Value
// const fitTheFirstValue = (arr) => {
//     if(arr[0]>arr.length) {
//         console.log("Too Big!")
//     } else if(arr[0] < arr.length) {
//         console.log("Too Small!")
//     } else {
//         console.log("Just Right");
//     }
// }
// fitTheFirstValue([2,2]);
// fitTheFirstValue([2,2,2]);
// fitTheFirstValue([2]);

// Fahrenheit to Celsius
// const fahrenheitToCelsius = (fDegrees) => {
//     let celsius = (fDegrees - 32) / (9/5);
//     return celsius;
// }
// console.log(fahrenheitToCelsius(75));
// console.log(fahrenheitToCelsius(99));

const celciusToFarenheit = (cDegrees)  => {
    let farenheit = (9/5 * cDegrees) +32;
    return farenheit;
}
console.log(celciusToFarenheit(33));

for(let i = 200; i>=-50; i--) {
    console.log(`Celcius degrees ${i} Farenheit degrees ${celciusToFarenheit(i)}`);
}