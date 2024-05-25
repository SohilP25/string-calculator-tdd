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

    var delimiter = ",";
    // Handling different delimiters
    if(this.input_str.startsWith("//")){
      delimiter = this.input_str[2];
      this.input_str = this.input_str.substring(4);
    }
    console.log("input string is : " + this.input_str);

    // Handling new line numbers
    this.input_str = this.input_str.replace(/\n/g, ",");
    // Removing white spaces 
    this.input_str = this.input_str.replace(/\s/g, "");

    // Empty string
    if (!this.input_str) {
      return 0;
    } 

    //split the string based on delimiter
    const numbers = this.input_str.split(delimiter);
    let sum = 0; 
    //Negative numbers message
    let negativeNumbersError = "";

    //calculate the sum of the numbers
    for(let number of numbers){
      console.log(number);
      let value = parseInt(number);
      // handle new lines at end or beginning of string
      if(isNaN(value)) throw Error("Invalid input");
      // handle negative numbers
      else if(value < 0) negativeNumbersError += number + ",";
      // Ignore numbers greater than 1000
      else if(value > 1000) continue;
      else sum += value;
    } 

    // throw error if negative numbers are present
    if(negativeNumbersError != "") throw Error("Negatives not allowed : " + negativeNumbersError);
    return sum;
}
} 
export default Calculator;