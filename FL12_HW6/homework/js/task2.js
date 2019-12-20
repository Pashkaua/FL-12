let a = parseInt(prompt('Pleace enter the length of the first side', ''));
let b = parseInt(prompt('Pleace enter the length second of the first side', ''));
let c = parseInt(prompt('Pleace enter the length of the first side', ''));

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('input values should be ONLY numbers');
    location.reload();
} else if (a <= 0 || b <= 0 || c <= 0) {
    alert('A triangle must have 3 sides with a positive definite length');
    location.reload();
} else if (a + b <= c || a + c <= b || b + c <= a) {
    alert('Triangle doesn’t exist’');
    console.log('Triangle doesn’t exist');
    location.reload();
} else {
    if (a === b && b === c) {
        console.log('Equilateral triangle');
    } else if (a === b || a === c || b === c) {
        console.log('Isosceles triangle');
    } else if (a !== b && a !== c && b !== c) {
        console.log('Scalene triangle');
    }
}