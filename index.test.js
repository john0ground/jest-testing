import { capitalize, reverse, calculator } from "./index";

test('capitalize => cat to output Cat', () => {
    expect(capitalize('cat')).toBe('Cat');
});

test('reverse => congrats to output stargnoc', () => {
    expect(reverse('congrats')).toBe('stargnoc');
});

test('add => 6 and 5 to output 11', () => {
    expect(calculator.add(6, 5)).toBe(11);
});