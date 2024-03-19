function getPrimeNumbers(arr){
    let primeNumbers = [];
    for(let i = 0; i < arr.length; i++){
        if(isPrime(arr[i])) primeNumbers.push(arr[i]);
    }
    return primeNumbers;
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(getPrimeNumbers([2, 4, 3, -1, 5, 100, 7]))