function isPrimeNumber(num) {

    if (num < 2) {
        return "Non-prime number";
    }


    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return "Non-prime number";
        }
    }


    return "Prime number";
}

let input = 8; 
let result = isPrimeNumber(input);
console.log(result);