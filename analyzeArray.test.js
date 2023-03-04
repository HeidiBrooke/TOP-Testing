const analyzeArray = require('./analyzeArray.js');

test('positive array of 5 ints', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({average: 4, min: 1, max: 8, length: 6});
})

test('array of 1', () => {
    expect(analyzeArray([7])).toMatchObject({average: 7, min: 7, max: 7, length: 1});
})

test('empty array', () => {
    expect(analyzeArray([])).toBe('array is empty');
})

test('array contains negatives', () => {
    expect(analyzeArray([-2, 4, 8, -2])).toMatchObject({average: 2, min: -2, max: 8, length: 4});
})

test('array is null', () => {
    expect(analyzeArray(null)).toBe('not an array');
})

test('array is undefined', () => {
    expect(analyzeArray(undefined)).toBe('not an array');
})

