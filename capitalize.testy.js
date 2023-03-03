const capitalize = require('./capitalize.js');

test('single letter replace', () => {
    expect(capitalize('a')).toBe('A');
});

test('a string with length over 1', () => {
    expect(capitalize('i love icecream')).toBe('I love icecream');
});

test('first character is a space', () => {
    expect(capitalize(' a dog.')).toBe(' A dog.');
});

test('multiple spaces before first char', () => {
    expect(capitalize('   a dog.')).toBe('   A dog.');
});

test('already capitalized', () => {
    expect(capitalize('A dog.')).toBe('A dog.');
});

test('empty string', () => {
    expect(capitalize('')).toBe('You did not type a letter.');
});

test('a number as a number', () => {
    expect(capitalize(1)).toBe('You did not type a letter.');
});

test('a number as a string.', () => {
    expect(capitalize(1)).toBe('You did not type a letter.');
});



