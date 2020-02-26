
// ---------------------Task_01--------------------------


const maxElement = (arr) => Math.max(...arr);



// ---------------------Task_02--------------------------


const copyArray = arr => arr.slice();



// ---------------------Task_03--------------------------


const addUniiqueId = (obj) => {
    let res = obj;
    const uniqueId = Symbol(Math.random().toString(16).slice(2));
    res.id = uniqueId.description
    return res
}


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


// ---------------------Task_05--------------------------


const findUniqueElements = arr => [...new Set(arr)];



// ---------------------Task_06--------------------------


const phoneNumber = num => num.slice(-4).padStart(num.length, '*')



// ---------------------Task_07--------------------------


const required = () => {
    throw new Error('Missing property');
}

const add = (a = required(), b = required()) => {
    return a + b;
}


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