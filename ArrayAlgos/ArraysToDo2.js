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
//     if(shiftBy>0){
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
// let leftRotate = rotateArr([1,2,3,4,5,6,7,8,9,0], 2);

// Filter Range
// const filterRange = (arr, min, max) => {
//     for(let i = 0; i<arr.length; i++) {
//         console.log(arr + "is beginning")
//         if(arr[i]<=min || arr[i]>=max) {
//             if(arr[i] === arr.length-1) {
//                 arr.length--;
//             }else {
//                 console.log(arr);
//                 for(let j = i; j<arr.length; j++) {
//                     arr[j] = arr[j+1]
//                     console.log(arr);
//                 }
//                 arr.length--;
//             }
//             // will start on the line after where you want to be if you let it count
//             i--;
//             console.log(arr);
//         }
//     }
//     return(arr)
// }
// let range = filterRange([80,2,3,10,5,6,7,8,9], 2, 5);
// console.log(range);

// Concat
const myConcat = (arr1, arr2) => {
    let newArr = [];
    for(let i = 0; i<arr1.length; i++) {
        newArr.push(arr1[i]);
    }
    for(let j = 0; j<arr2.length; j++) {
        newArr.push(arr2[j]);
    }
    return newArr;
}
console.log(myConcat([1,2,3,4], ["Hi","Hello","Bye","GoodBye"]));
