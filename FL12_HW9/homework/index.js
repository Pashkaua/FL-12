// Task 1 converts the argument values.

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


// Task 2  iterates over array 

function executeforEach(arr, fun) {
    for (let i = 0; i < arr.length; i++) {
        fun(arr[i]);
    }
}


// Task 3  mapArray

function mapArray(arr, fun) {
    let res = [];
    executeforEach(arr, el => {
        res.push(fun(parseInt(el)));
    });
    return res;
}


// Task 4 filterArray

function filterArray(arr, fun) {
    let res = [];
    executeforEach(arr, el => {
        if (fun(el)) {
            res.push(el);
        }
    });
    return res;
}


//Task 5 reverses the string value 

function flipOver(str) {
    let res = '';
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i]
    }
    return res;
}


//Task 6 range of numbers

function makeListFromRange(arr) {
    let res = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
        res.push(i);
    }
    return res;
}


//Task 7 get keys of array

function getArrayOfKeys(arr, val) {
    let res = [];
    executeforEach(arr, el => {
        res.push(el[val]);
    })
    return res;
}


//Task 8 get keys of array

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


//Task 9 get  past day

function getPastDay(date, day) {

    let new_date = new Date(date);
    let res = new Date(new_date.setDate(new_date.getDate() - day));
    const options = { day: 'numeric', month: 'short', year: 'numeric' };

    return res.toLocaleString('en-GB', options);

}