// Reverse
// const reverse = (arr) => {
//     let temp = arr[0];
//     for(let i = 0; i<arr.length/2; i++) {
//         temp = arr[i];
//         arr[i] = arr[arr.length-i-1];
//         arr[arr.length-i-1] = temp;
//     }
//     return arr;
// }
// // Tested with a non numerical item also since it works
// let revArr = reverse([5,4,6,0,1,2,3,4,5,6,7,8,9,'hi']);
// console.log(revArr);

// Rotate
// this works, but I should really fix the negative shift one to make more sense
// const rotateArr = (arr, shiftBy) => {
//     if(shiftBy<0){
//         for(let shift = shiftBy; shift<0; shift++) {
//             let temp = arr[0];
//             for(let i = arr.length-1; i >= 1; i--) {
//                 arr[arr.length-1-i] = arr[arr.length-i];
//                 arr[arr.length-i] = temp;
//                 console.log(arr);
//             }
//         }
        
//     }else {
//         let temp = 0;
//         for( let shift = shiftBy; shift>0; shift--)  {
//             temp = arr[arr.length-1];
//             console.log(arr[arr.length-1]);
//             for(let i = arr.length-1; i>=0; i--) {
//                 arr[i] = arr[i-1]
//                 console.log(arr);
//             }
//             arr[0] = temp;
//             console.log(arr);
//         }
        
//     }
// }

// let rotate = rotateArr([1,2,3,4,5,6,7,8,9,0], 5);
// let leftRotate = rotateArr([1,2,3,4,5,6,7,8,9,0], -2);