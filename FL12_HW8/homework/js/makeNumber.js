function makeNumber(str) {
    let num = [];
    for (let i = 0; i < str.length; i++) {
        if (Number.isInteger(+str[i])) {
            num.push(str[i]);
        }
    }
    return num.join('');
}

makeNumber('erer384jjjfd123');
makeNumber('123098h76gfdd');
makeNumber('ijifjgdj');