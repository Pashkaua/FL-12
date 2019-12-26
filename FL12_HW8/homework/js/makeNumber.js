function makeNumber(str) {
    let num = [];
    for (let i = 0; i < str.length; i++) {
        if (Number.isInteger(+str[i])) {
            num.push(str[i]);
        }
    }
    return num.join('');
}

console.log(makeNumber('erer384jjjfd123')); //=>384123
console.log(makeNumber('123098h76gfdd')); //=>12309876
console.log(makeNumber('ijifjgdj')); //=> should return empty string ->''