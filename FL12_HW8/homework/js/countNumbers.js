function makeNumber(str) {
    let num = [];
    for (let i = 0; i < str.length; i++) {
        if (Number.isInteger(+str[i])) {
            num.push(str[i]);
        }
    }
    return num.join('');
}


function countNumbers(arr) {
    let res = makeNumber(arr);
    let finRes = {};
    for (let i = 0; i < res.length; i++) {
        let num2 = 0;
        for (let j = 0; j < res.length; j++) {
            if (res[i] === res[j]) {
                num2++;
            }
        }
        finRes[res[i]] = num2;
    }
    return JSON.stringify(finRes);
}

console.log(countNumbers('erer384jj4444666888jfd123'));
// => {'1': 1, '2': 1, '3': 2, '4': 5, '6': 3, '8': 4}
console.log(countNumbers('jdjjka000466588kkkfs662555'));
// => {'0': 3, '2': 1, '4': 1, '5': 4, '6': 4, '8': 2}
console.log(countNumbers('')); // => {}
