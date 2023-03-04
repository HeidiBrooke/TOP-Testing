const alphabet = ('abcdefghijklmnopqrstuvwxyz').split('');

function cipher(string, key){
    if(typeof key !== 'number'){
        return 'key is not a number.'
    }
    key = Number(key.toFixed(0));
    if(typeof string !== "string"){
        if(typeof string == 'number'){
            string = alphabet[string];
        }
        else{
            return 'did not enter string!'
        }
    }
    let newString = [];
    string = string.split('');
    string.forEach(char => {
        char = char.toLowerCase();
        if(!alphabet.includes(char)){
            newString.push(char)
        }
        else{
            let index = alphabet.indexOf(char) + key;
            while(index > 25){
            index = index - 26;
            }
            if(index < 0){
                index = 26 + index;
            }
            newString.push(alphabet[index])
        }
        
    });
    return newString.join('');
}

module.exports = cipher;