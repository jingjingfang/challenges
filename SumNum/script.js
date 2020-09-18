// sum all nums in a range

function sumAll(arr) {
    let sum=0;
    let min= Math.min(arr[0],arr[1])
    let max=Math.max(arr[0],arr[1])
    for (let i=min;i<=max; i++) {
        sum+=i;
    }
    return sum;
}

sumAll([1,4]);


// The formula for calculating the sum of a continuous range is “(startNum + endNum) * numCount / 2”.
function sumNum(arr) {
    let min=Math.min(arr[0],arr[1]);
    let max=Math.max(arr[0],arr[1]);
    let count=max-min+1;
    sum=(min+max)*count/2;
    return sum;
}

sumNum([2,6]);