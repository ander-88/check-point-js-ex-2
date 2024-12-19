function stringSearch(arr) {
    let reach = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
            reach.push(arr[i]);
        }
    }
    return reach;
}

let input = [2,6,'look',9,'bro'];
let reach= stringSearch(input);
console.log(reach);