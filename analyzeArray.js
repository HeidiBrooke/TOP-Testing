function add(array){
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
}

function average(array){
    let sum = add(array);
    let average = sum/(array.length);
    return average;
}

function min(array){
    let min = array[0];
    array.forEach(element => {
        if(element < min){
            min = element;
        }
    })
    return min;
}

function max(array){
    let max = array[0];
    array.forEach(element => {
        if(element > max){
            max = element;
        }
    })
    return max;
}

function analyzeArray(array){
    if(Array.isArray(array)){
        if(!array.length == 0){
            const obj = {
                average: average(array),
                min: min(array),
                max: max(array),
                length: array.length
            };
            return obj;
        }
        return 'array is empty'
    }
    return 'not an array'  
}

module.exports = analyzeArray;