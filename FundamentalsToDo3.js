// BiggieSize
// const biggie = (arr) => {
//     if(arr.length<1) {
//         let myString = "Give me a bigger array than that"
//         return myString;
//     } else {
//         let newArr = [];
//         for(let i = 0; i<arr.length; i++) {
//             if(arr[i]<=0) {
//                 newArr.push(arr[i]);
//             } else {
//                 newArr.push("big");
//             }
//         }
//         return newArr;
//     }
// }
// console.log(biggie([-1,3,5,-5]));

// Print Low, Return High
// const printLowReturnHigh = (arr) => {
//     let low = arr[0]; 
//     let high = arr[0];

//     if(arr.length>=2) {
//         for(let i = 0; i<arr.length; i++) {
//             if(arr[i]>high) {
//                 high = arr[i];
//             } else if(arr[i]<low) {
//                 low=arr[i];
//             } 
//         }
//         console.log(low);
//         return high;
//     } else {
//         console.log("Array needs more items")
//     }
// }
// let newHigh = (printLowReturnHigh([3,5,6,-9,2,78,4]));
// console.log(newHigh);

// Print one, return another
// const printAndReturn = (arr) => {
//     console.log(arr[arr.length-2]);
//     for(let i = 0; i<arr.length; i++) {
//         if(arr[i]%2!=0) {
//             return arr[i];
//         }   
//     }
//     let noOdd = "No Odds";
//     return(noOdd);
// }
// let newPrint = printAndReturn([2,6,8,10,3,9,10]);
// console.log(newPrint);

// Double Vision
// const doubleVision = (arr) => {
//     let newArr = [];
//     for(let i = 0; i<arr.length; i++) {
//         newArr.push(arr[i] * 2);
//     }
//     return newArr;
// }
// console.log(doubleVision([2,-4,6,8,10]));

// Count Positives
// const countPositives = (arr) => {
//     count = 0;
//     for(let i = 0; i<arr.length; i++) {
//         count++;
//     }
//     arr[arr.length-1] = count;
//     return arr;
// }
// console.log(countPositives([2,4,6,8,10]));

// Evens and Odds
// const evensAndOdds = (arr) => {
//     let oddCount = 0;
//     let evenCount = 0;
//     for(let i = 0; i<arr.length; i++) {
//         if(arr[i]%2!==0) {
//             evenCount = 0;
//             oddCount++;
//             if(oddCount%3===0) {
//                 console.log("That's Odd");
//             }
//         } else {
//             oddCount = 0;
//             evenCount++;
//             if(evenCount%3===0) {
//                 console.log("Even More So!")
//             }
//         }
//     }
//     return(evenCount, oddCount);
// }
// const test = evensAndOdds([2,3,2,2,2,3,3,3,3,3,3,2,2,2,5,7,8,9,9,9,2,2,2]);

// Increment the Seconds
// const incrementTheSeconds = (arr) => {
//     for(let i = 0; i<arr.length; i++) {
//         console.log(arr[i]);
//         if(arr[i]%2!==0) {
//             arr[i] += 1;
//             console.log(arr[i]);
//         }
//     }
//     return(arr);
// }
// const testRun = incrementTheSeconds([ 2,4,3,1,6,7,8,9,4,5]);
// console.log(testRun);

// Previous Lengths
// const previousLengths = (arr) => {
//     let tempString = arr[0];
//     let number = 0;
//     for(let i = 0; i<arr.length; i++) {
//         tempString = arr[i];
//         arr[i] = number;
//         number = tempString.length;
//     }
//     return(arr);
// }
// const newArr = previousLengths(["hi", "Hello", "you", "Wowza"]);
// console.log(newArr);

// Add Seven to Most
// not sure what they wanted due to bad wording.  I did both things I thought it could be.
// const addSevenToMost = (arr) => {
//     let newArr = [];
//     for(let i = 0; i<arr.length; i++) {
//         newArr.push(arr[i] + 7);
//     }
//     return(newArr);
// }
// console.log(addSevenToMost([1,2,3,54,6,7,8]));

// const addSevenToMost2 = (arr) => {
//     let newArr = [];
//     for(let i = 1; i<arr.length; i++) {
//         newArr.push(arr[i] + 7);
//     }
//     return(newArr);
// }
// console.log(addSevenToMost2([1,2,3,54,6,7,8]));

// Reverse Array
// const reverseArray = (arr) => {
//     let temp = 0;
//     for(let i = 0; i<arr.length/2; i++ ) {
//         temp = arr[i];
//         arr[i] = arr[(arr.length-1)-i];
//         arr[(arr.length-1)-i] = temp;
//     }
//     return(arr);
// }
// const reverse = reverseArray([1,2,3,4,5,6,7,8,9,34,5,6,-1]);
// console.log(reverse);



// // Swap toward the center
// const swapper = (arr) => {
//     let temp = 0;
//     // not sure why but if I add 2 to i it causes an infinite loop.
//     for(let i = 0; i<arr.length/2; i++) {
//         if(i%2===0){
//             temp = arr[i];
//             arr[i] = arr[(arr.length-1) -i];
//             arr[(arr.length-1) -i] = temp;
//         }
//     }
//     return(arr);
// }
// let swapped = (swapper([1,2,3,4,5,6,7]));
// console.log(swapped);

// Scale the Array
const arrayScaler = (arr, num) => {
    for(let i = 0; i<arr.length; i++) {
        arr[i] = arr[i] *= num;
    }
    return(arr);
}
console.log(arrayScaler([2,3,5,7,84,3], 9));
console.log(arrayScaler([2,5,7,8,9,5,4,65], -1));