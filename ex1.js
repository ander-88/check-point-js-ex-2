function reversStr(str){
    let reversed=[];
    for (i = str.length; i>=0 ; i --){
        reversed += str[i];
    }
    return reversed
}

let input = "down town";
let reversed = reversStr(input);
console.log(reversed);

