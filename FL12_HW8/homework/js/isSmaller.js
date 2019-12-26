const isBigger = (a, b) => a > b;

const isSmaller = (a, b) => !isBigger(a, b);

console.log(isSmaller(1, 5));
