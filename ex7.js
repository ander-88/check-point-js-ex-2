function factorial(num) {
    if (num < 0) {
        return "Try a positive number please!";
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

let input = 10;
let result = factorial(input);
console.log(result);
