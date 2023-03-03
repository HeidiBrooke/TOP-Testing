Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

const add = (num1, num2) => {
        return Number((num1 + num2).toFixed(4));
    }

const subtract = (num1, num2) => {
        return Number((num1 - num2).toFixed(4));
    }

const multiply = (num1, num2) => {
    return Number((num1 * num2).toFixed(4));
}

const divide = (num1, num2) => {
    return Number((num1/num2).toFixed(4));
}

const calculator = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    
};


exports["default"] = calculator