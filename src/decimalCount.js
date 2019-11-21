export const decimalCount = (number) =>{
  let test = number.toString();
   if(test.indexOf('.') === -1){
     return number
   } 
  let decimalCount = test.split('.').pop().length;
   if(decimalCount > 3){
      return number.toFixed(3)
    }
   return number; 
    
}
  
  
  