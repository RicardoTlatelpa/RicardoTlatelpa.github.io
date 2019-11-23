export const setNegative = (num) =>{
    let negative = num.toString()
    //take in a number add a negative if it's positive. if the number is negative return a positive
    if(negative.indexOf('-') === -1){
        let newN = negative.split('');
        newN.unshift('-');
        return newN.join('');
    
    }
    else{
        let newN = negative.split('')
        newN.shift()
        return newN.join('');
    }
}
    
    