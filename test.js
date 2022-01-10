// // BADC0DE – intentionally buggy
// function addEvenCount(arr) {
//     // Count array even values & add that number to end of array
//     for (var idx = 0; idx < arr.length; idx++) {
//         if (idx == 0) {
//             arr.push(0); // First time, add 0 to end.
//             console.log(arr);
//         }
//         if (arr[idx] % 2 == 0) { // Then just add to it as we go.
//             arr[arr.length - 1] += 1;
//             console.log(arr);
//         }
//     }
// } // Oops! We counted the "2" as well.

// const wtf = addEvenCount([3,4,5,6]);
// console.log(wtf);