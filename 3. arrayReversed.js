function reverseArray(arr){
    let reverseArray = [];
    for(let i=arr.length-1; i>=0; i--){
        reverseArray.push(arr[i])
    }
    return reverseArray
}

console.log(reverseArray([".", " old ", " Years ", 23, "I am "]))