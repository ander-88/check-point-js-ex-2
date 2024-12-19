function maxandmin(arr){
    let max=arr[0];
    let min=arr[0];
    for (i=0 ; i<arr.length; i++){
        if (max<arr[i]) {
            max =arr[i];
            
        }
        if (min > arr[i]) {
            min = arr[i];
            
        }
    }
    return { max, min };
    
}

let input = [2, 5, 9, 1, 3,26];
let result = maxandmin(input);

console.log("Maximum:", result.max);
console.log("Minimum:", result.min);