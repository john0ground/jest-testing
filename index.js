const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const reverse = (str) => str.split('').reverse().join('');
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b
}

const shiftLetter = (letter, shift) => {
    const alphabet = String.fromCharCode(...Array(123).keys()).slice(97);
    let i = alphabet.indexOf(letter);
    while ((i + shift) > 25) {
        i -= 26
    }

    return alphabet[i + shift];
}

const caesarCipher = (str, shift) => {
    const letter = /^[A-Za-z]$/;
    const upperCase = /^[A-Z]$/;

    return str.split('').map(char => {
        if (!letter.test(char)) return char;

        return upperCase.test(char)?
        shiftLetter(char.toLowerCase(), shift).toUpperCase():
        shiftLetter(char, shift);
    }).join('');
}

export { capitalize, reverse, calculator, caesarCipher }