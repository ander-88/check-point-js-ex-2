function SumofArray(arr){
let sum=0;
for (i=0; i<arr.length; i++){
    sum+=arr[i]
}
return sum
}
let input = [2,5,6,3,8,1];
let sum = SumofArray(input);
console.log(sum);