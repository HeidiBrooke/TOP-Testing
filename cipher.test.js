const cipher = require('./cipher.js');


test('baby', () => {
    expect(cipher('baby', 1)).toBe('cbcz');
})

test('phrase with spaces', () => {
    expect(cipher('baby baby', 1)).toBe('cbcz cbcz');
})

test('key of 24', () => {
    expect(cipher('baby baby', 24)).toBe('zyzw zyzw');
})

test('key of 25', () => {
    expect(cipher('baby baby', 25)).toBe('azax azax');
})

test('key of 100', () => {
    expect(cipher('baby baby', 100)).toBe('xwxu xwxu');
})

test('lots of puntuation', () => {
    expect(cipher('baby! b aby@#!, ', 24)).toBe('zyzw! z yzw@#!, ');
})

test('numbers', () => {
    expect(cipher(9, 24)).toBe('h');
})

test('null', () => {
    expect(cipher(null, 24)).toBe('did not enter string!');
})

test('key non int', () => {
    expect(cipher('hey', null)).toBe('key is not a number.');
})

test('key contains decimal', () => {
    expect(cipher('baby', 1.5)).toBe('dcda');
})

test('key is negative', () => {
    expect(cipher('baby', -1)).toBe('azax');
})

test('no cipher/change', () => {
    expect(cipher('baby', 0)).toBe('baby');
})

test('upper case', () => {
    expect(cipher('BABY', 25)).toBe('azax');
})