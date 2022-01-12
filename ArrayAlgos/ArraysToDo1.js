// Push Front
const pushValueInFront = (arr, newFront) => {
    let temp = arr[arr.length-1];
    arr.push(temp);
    for(let i = arr.length-1; i>=arr[0]; i--) {
        console.log(arr[i]);
        arr[i] = arr[i-1];
        console.log(arr);
    }
    arr[0]= newFront; 
    return(arr);
}
console.log(pushValueInFront([2,4,6,7,8], 10));