// Task 1 converts the argument values.

let aOne = 2;
let bOne = 3;

function converts(...args) {
    let res = [];

    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] === 'string') {
            args[i] = parseInt(args[i]);
            res.push(args[i]);
        } else if (typeof args[i] === 'number') {
            args[i] = args[i].toString();
            res.push(args[i]);
        }
    }
    return res;
}

converts('1', aOne, bOne, '4');


// Task 2  iterates over array 

let aTwo = 1;
let bTwo = 2;
let cTwo = 3;

function executeforEach(arr, fun) {
    for (let i = 0; i < arr.length; i++) {
        fun(arr[i]);
    }
}

executeforEach([aTwo, bTwo, cTwo], function (el) {
    console.log(el * bTwo)
});


// Task 3  mapArray

let aThree = 2;
let bThree = 3;
let cThree = 8;

function mapArray(arr, fun) {
    let res = [];
    executeforEach(arr, el => {
        res.push(fun(parseInt(el)));
    });
    return res;
}

mapArray([aThree, '5', cThree], function (el) {
    return el + bThree;
});


// Task 4 filterArray

let aFour = 2;
let bFour = 5;
let cFour = 8;

function filterArray(arr, fun) {
    let res = [];
    executeforEach(arr, el => {
        if (fun(el)) {
            res.push(el);
        }
    });
    return res;
}

filterArray([aFour, bFour, cFour], function (el) {
    return el % aFour === 0;
});


//Task 5 reverses the string value 

function flipOver(str) {
    let res = '';
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i]
    }
    return res;
}

flipOver('hey world');


//Task 6 range of numbers

const aSix = 2;
const bSix = 7;

function makeListFromRange(arr) {
    let res = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
        res.push(i);
    }
    return res;
}

makeListFromRange([aSix, bSix]);


//Task 7 get keys of array

function getArrayOfKeys(arr, val) {
    let res = [];
    executeforEach(arr, el => {
        res.push(el[val]);
    })
    return res;
}

const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];

getArrayOfKeys(actors, 'name');


//Task 8 get keys of array

const aEight = 58;
const bEight = 14;
const cEight = 48;
const dEight = 2;

function substitute(arr) {
    const max = 30;

    return mapArray(arr, function (el) {
        if (el > max) {
            return el
        } else {
            return '*';
        }
    });
}

substitute([aEight, bEight, cEight, dEight]);


//Task 9 get  past day

const aNine = 2;
const bNine = 365;
const cNine = 2019;

function getPastDay(date, day) {

    let new_date = new Date(date);
    let res = new Date(new_date.setDate(new_date.getDate() - day));

    return res.getDate();
}

const date = new Date(cNine, 0, aNine);

getPastDay(date, 1);
getPastDay(date, aNine);
getPastDay(date, bNine);


//Task 10 format Date

function formatDate(date) {

    let res = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;

    return res;
}

formatDate(new Date('6/15/2018 09:15:00'));
formatDate(new Date());