/*
** calculate the sum of the numbers in the string 
*/
class Calculator {
  /*
      @param input_str : string - Input must be in string 
  */
  input_str: string;

  constructor(input_str: string) {
    this.input_str = input_str;
  }

  add(): number {
    /*
      @return : number - Sum of number as output will be an Integer
    */

    // Removing white spaces 
    this.input_str = this.input_str.replace(/\s/g, "");

    // Empty string
    if (!this.input_str) {
      return 0;
    } 

    var delimiter = ",";

    //split the string based on delimiter
    const numbers = this.input_str.split(delimiter);
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