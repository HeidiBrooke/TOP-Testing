const reverseString = require('./reverseString.js');

test('single letter', () => {
    expect(reverseString('a')).toBe('a');
})

test('two letters', () => {
    expect(reverseString('ab')).toBe('ba');
})

test('multi-letter with spaces', () => {
    expect(reverseString('a racecar ')).toBe(' racecar a');
})
test('empty string', () => {
    expect(reverseString('')).toBe('please enter a phrase');
})

test('number inputs', () => {
    expect(reverseString(1)).toBe('please enter a phrase');
})

test('null inputs', () => {
    expect(reverseString(null)).toBe('please enter a phrase');
})

test('undefined inputs', () => {
    expect(reverseString(undefined)).toBe('please enter a phrase');
})

