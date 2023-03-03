const calculator = _interopRequireDefault(require('./calculator.js'));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('add two positive nums', () => {
    expect(calculator["default"].add(3,4)).toBe(7);
})

test('add two nums, mixed signs (pos/neg)', () => {
    expect(calculator["default"].add(-3,4)).toBe(1);
})

test('add two decimal numbers (up to 4 places)', () => {
    expect(calculator["default"].add(3.3333,4)).toBe(7.3333);
})

test('subtract small num from large num', () => {
    expect(calculator["default"].subtract(4, 3)).toBe(1);
})

test('subtract large num from small num', () => {
    expect(calculator["default"].subtract(3, 4)).toBe(-1);
})

test('subtract two neg nums', () => {
    expect(calculator["default"].subtract(-3, -4)).toBe(1);
})

test('subtract decimal nums over 4 places', () => {
    expect(calculator["default"].subtract(.99999, .11111)).toBe(.8889);
})

test('multiply two whole pos nums', () => {
    expect(calculator["default"].multiply(3, 4)).toBe(12);
})

test('multiply pos & neg nums', () => {
    expect(calculator["default"].multiply(-3, 4)).toBe(-12);
})

test('multiply 2 neg nums', () => {
    expect(calculator["default"].multiply(-3, -4)).toBe(12);
})

test('multiply 2 nums w/more than 4 decimal places', () => {
    expect(calculator["default"].multiply(5.55555, 5.55555)).toBe(30.8641);
})

test('divide 2 nums with no remainder', () => {
    expect(calculator["default"].divide(10, 2)).toBe(5);
})
test('divide 2 nums with remainder', () => {
    expect(calculator["default"].divide(10, 3)).toBe(3.3333);
})

test('divide 2 nums with many decimals', () => {
    expect(calculator["default"].divide(10.45454, 3.45454)).toBe(3.0263);
})