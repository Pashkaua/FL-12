let a = parseInt(prompt('Pleace enter the first number', ''));
let b = parseInt(prompt('Pleace enter the second number', ''));
let c = parseInt(prompt('Pleace enter the third number', ''));

let num2 = 2;
let num4 = 4;

let discr = b * b - num4 * a * c;
let sqrtDiscr = Math.sqrt(discr);

let x1 = (-b + sqrtDiscr) / num2 * a;
let x2 = (-b - sqrtDiscr) / num2 * a;

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