/*
** calculate the sum of the numbers in the string 
*/
class Calculator {
  add(input_str: string): number {
    /*
      @param input_str : string - Input must be in string 
      @return : number - Output will be an Integer
    */

    // Removing white spaces 
    input_str = input_str.replace(/\s/g, "");

    // Empty string
    if (!input_str) {
      return 0;
    } 

    var delimiter = ",";

    //split the string based on delimiter
    const numbers = input_str.split(delimiter);
    let sum = 0;

    //calculate the sum of the numbers
    for(let number of numbers){
      // console.log(number);
      let value = parseInt(number);
      sum += value;
    } 

    return sum;
}
} 
export default Calculator;