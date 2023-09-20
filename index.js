const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const reverse = (str) => str.split('').reverse().join('');
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b
}

export { capitalize, reverse, calculator }