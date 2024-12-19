function CapitalizeWords(cap){
    let capi="";
    for (i=0 ; i<cap.length; i++){
        capi += cap[i].toUpperCase()
    }
    return capi;
}

let input = "the real word!";
let capi = CapitalizeWords(input);
console.log(capi);