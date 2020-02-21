
// ---------------------Task_01--------------------------

const array = [12, 56, 5, 41, -101, 6, 99, 6, 11, 6, 1, 0, -16, 1];

const maxElement = (arr) => {
    return Math.max(...arr)
}

// console.log(maxElement(array));


// ---------------------Task_02--------------------------

const array2 = [1, 2, 3];

const copyArray = (arr) => {
    return arr.slice();
}
const copiedArray = copyArray(array2);

// console.log(array2, copiedArray);
// console.log(array2 === copiedArray);


// ---------------------Task_03--------------------------

const addUniiqueId = (obj) => {
    let res = obj;
    const uniqueId = Symbol(Math.random().toString(16).slice(2));
    res.id = uniqueId.description
    return res
}

// console.log(addUniiqueId({ name: 123 }));

// ---------------------Task_04--------------------------

const oldObj = { name: "Someone", details: { id: 1, age: 11, university: 'UNI' } }

const regroupObject = (oldObj) => {
    return newObj = {
        university: oldObj.details.university,
        user: {
            age: oldObj.details.age,
            firstName: oldObj.name,
            id: oldObj.details.id
        }
    }
}

// console.log(regroupObject(oldObj));


// ---------------------Task_05--------------------------

const findUniqueElements = (arr) => {
    return [...new Set(arr)]
}

// console.log(findUniqueElements(array));


// ---------------------Task_06--------------------------

const phoneNumber = (num) => {
    return num.slice(-4).padStart(num.length, '*')
}
const tel = '18151515153213';

// console.log(phoneNumber(tel));


// ---------------------Task_07--------------------------

const required = () => {
    throw new Error('Missing property');
}

const add = (a = required(), b = required()) => {
    return a + b;
}

// console.log(add(1, 3));
// console.log(add(1));


// ---------------------Task_08--------------------------

const getName = () => {
    const fetchPromise = fetch('https://jsonplaceholder.typicode.com/users');
    return fetchPromise.then(response => response.json())
        .then(users => {
            const res = users.map(user => user.name).sort();
            console.log(res);
        }).catch(error => {
            console.log(`Error: ${error}`);
        })
}

// getName();


// ---------------------Task_09--------------------------

const getNameAsync = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (response.status === 200) {
        let users = await response.json();
        let usersSort = await users.map(user => user.name).sort();
        console.log(usersSort);
    } else {
        throw new Error(response.status);
    }
}
getNameAsync();