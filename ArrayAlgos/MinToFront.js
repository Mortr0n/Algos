// MinToFront This will not work if there are multiple of the same min
const minToFront = (arr) => {
    let min = arr[0];
    let moveToIndex = arr[0];
    for(let i = 0; i<arr.length; i++) {
        if(arr[i]<min) {
            min=arr[i];
            moveToIndex=i;
        }
    }
    for(let i = moveToIndex; i>=0; i--) {
        arr[i] = arr[i-1];
    }
    arr[0]=min;   
    console.log(arr); 
}
let arr = minToFront([9,2,4,6,8,1,4,6]);

