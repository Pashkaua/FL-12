function addOne(x) {
    return x + 1;
}

function pipe(num, ...callback) {
    let res = callback[0](num);
    for (let i = 0; i < callback.length - 1; i++) {
        res = callback[i](res);
    }
    return res;
}

console.log(pipe(1, addOne)); //=> 2
console.log(pipe(1, addOne, addOne)); //=> 3
