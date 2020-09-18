
/**
 * @description sorting arrays using the setTimeout function
 * @param _arrNum is an array with multiple values 
 * @function SortArray logs the values of the @param _arrNum in the console
 * @see this method is only approved for numbers.
 */
function SortArray(_arrNum){
   let result = _arrNum.forEach(v=>setTimeout(() => {
      console.log(v);
   }, v))
   return result;
}

SortArray([8,19,12,2,1,6,1])