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
        finRes[`'${res[i]}'`] = num2;

    }
    return finRes;
}

countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');
countNumbers(''); 
