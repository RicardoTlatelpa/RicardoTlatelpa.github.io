export const decimalCount = (number) =>{
  let test = number.toString();
   if(test.indexOf('.') === -1){
     return number
   } 
  let decimalCount = test.split('.').pop().length;
   if(decimalCount > 3){
     let num = number.toFixed(3);
      return num.toString();
    }
   return number; 
    
}
  
  
  