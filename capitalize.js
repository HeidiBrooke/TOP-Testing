function capitalize(input){
    let type = typeof input;
    let message = input;
    let firstChar = []
    if(type !== 'string'){
        return 'You did not type a letter.'
    }
    if(message !== ''){
        message = message.split('');
        firstChar.push(message.shift());
        while(firstChar[firstChar.length-1] == ' '){
            firstChar.push(message.shift());
        }
        firstChar = firstChar.join('').toUpperCase();
        message = message.join('');
        message = firstChar.concat(message);
        return message;
    }
    return 'You did not type a letter.' 
}

module.exports = capitalize;