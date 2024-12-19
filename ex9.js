function generateFibonacci(n) {
    if (n <= 0) {
        return "Please enter a positive number."; 
    }

    let fibonacci = []; 

    
    if (n >= 1) fibonacci.push(0);
    if (n >= 2) fibonacci.push(1);

  
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]); 
    }

    return fibonacci;
}

let numTerms = 15; 
let result = generateFibonacci(numTerms);
console.log(result); 