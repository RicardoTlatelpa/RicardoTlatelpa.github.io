import { decimalCount } from './decimalCount';
export const doMath = (input , str , opr) => {
    let input1 = parseFloat(input) || parseInt('0');
    let input2 = parseFloat(str) || parseInt('0');
    let total;
    
    switch(opr){
        case 'x':
            total = input1 * input2;
            return decimalCount(total)
        case '+':
            total = input1 + input2;
            return decimalCount(total)
        case '-':
            total = input1 - input2;
            return decimalCount(total)
        case '÷':
            total = input1/input2
            return decimalCount(total)
        default:
        return str || ''
    }
}