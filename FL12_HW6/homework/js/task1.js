let a = parseInt(prompt('Pleace enter the first number', ''));
let b = parseInt(prompt('Pleace enter the second number', ''));
let c = parseInt(prompt('Pleace enter the third number', ''));

let discr = b * b - (4 * a * c);
let sqrtDiscr = Math.sqrt(discr);

let x1 = (-b + sqrtDiscr) / 2 * a;
let x2 = (-b - sqrtDiscr) / 2 * a;

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Invalid input data');
} else {
    if (discr < 0) {
        console.log('no solution ');
    } else if (discr === 0 || a === 0) {
        console.log(`x = ${x1}`);
    } else {
        console.log(`x1 = ${x1} and x2 = ${x2}`);
    }
}