import { capitalize, reverse, calculator, caesarCipher } from "./index";

test('capitalize => cat to output Cat', () => {
    expect(capitalize('cat')).toBe('Cat');
});

test('reverse => congrats to output stargnoc', () => {
    expect(reverse('congrats')).toBe('stargnoc');
});

test('add => 6 and 5 to output 11', () => {
    expect(calculator.add(6, 5)).toBe(11);
});

test('subtract => 90 and 25 to output 65', () => {
    expect(calculator.subtract(90, 25)).toBe(65);
});

test('multiply 21 and 7 to output 147', () => {
    expect(calculator.multiply(21, 7)).toBe(147);
});

test('divide 72 by 3 to output 24', () => {
    expect(calculator.divide(72, 3)).toBe(24);
});

test('caeser cipher => shift 5 "attack ? on tiTAn &56!" to output "fyyfhp ? ts ynYFs &56!"', () => {
    expect(caesarCipher('attack ? on tiTAn &56!', 5)).toBe('fyyfhp ? ts ynYFs &56!');
});