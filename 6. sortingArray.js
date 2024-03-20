function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function customSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isPrime(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(customSort([10, 5, 3, 8, 7, 2, 6]));