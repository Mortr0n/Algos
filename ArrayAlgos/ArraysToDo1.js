// Push Front
// const pushValueInFront = (arr, newFront) => {
//     arr.push(arr[arr.length-1]);
//     for(let i = arr.length-2; i>=0; i--) {
//         console.log(arr[i]);
//         arr[i+1] = arr[i];
//         console.log(arr);
//     }
//     arr[0]= newFront; 
//     return(arr);
// }
// console.log(pushValueInFront([2,4,6,7,8], 10));
// console.log(pushValueInFront([3,5,8,2,9,1,-1,3,0], 14));

// Pop Front
// const popFront = (arr) => {
//     let valueToReturn = arr[0];
//     for(let i = 1; i < arr.length; i++) {
//         arr[i-1] = arr[i];
//     }
//     arr.pop();
//     console.log(arr);
//     return valueToReturn;
// }
// console.log(popFront([1,2,3,4,5,6,7,8,9,0]));
// // I did the next part for fun to see if it would work
// arr = [1,2,3,4,5,6,7,8,9,0];
// for(let i = arr.length-1; i>0; i--) {
//     let newArr = popFront(arr);
//     console.log(newArr);
// }

// Insert At
const insertValueAtIndex = (arr, index, value) => {
    for(let i = arr.length - 1; i>=index; i--) {
        arr[i+1] = arr[i];
    }
    arr[index] = value;
    console.log(arr);
}
let newInsert = insertValueAtIndex([1,2,3,4,5,6,7,8,9,0], 5, 25);
let newerInsertion = insertValueAtIndex([3,-1,0,4,8,3,3,2], 2, 7);