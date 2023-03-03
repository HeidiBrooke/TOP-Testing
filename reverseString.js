function reverseString(input) {
    let type = typeof input;
    if(type !== 'string'){
        return 'please enter a phrase';
    }
    if(input == ''){
        return 'please enter a phrase';
    }
    let message = input;
    let reverse = [];
    message = message.split('');
    let length = message.length;
    for(let i = 0; i < length; i++){
        reverse.push(message.pop());
    }
    reverse = reverse.join('');
    return reverse;
}

module.exports = reverseString;