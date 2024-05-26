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
     ** @description : This function will calculate the sum of the numbers in the string
     ** @param : input_str : string - Input must be in string
     ** @return : number - Sum of number as output will be an Integer
     */

    // Removing white spaces
    this.input_str = this.input_str.replace(/ /g, "");

    // Empty string
    if (!this.input_str) {
      return 0;
    }

    let delimiter: string = ",";

    //si = start index, ei = end index
    let si: number = this.input_str.indexOf("//");
    let ei: number = this.input_str.indexOf("\n");

    // Handling different delimiters of any length
    if (si != -1) {
      //Multiple delimiters with brackets
      if (this.input_str[si + 2] == "[") {
        this.handleMultipleDifferentDelimiters(si, ei);
      }
      //Single delimiter without brackets
      else {
        //changing the delimiter
        delimiter = this.input_str.slice(si + 2, ei);
        // Removing the delimiter prefix part
        this.input_str = this.input_str.substring(ei + 1);
      }
    }

    // Handling new line numbers
    this.input_str = this.input_str.replace(/\n/g, delimiter);

    //split the string based on delimiter
    const numbers: string[] = this.input_str.split(delimiter);
    let sum: number = 0;
    //Negative numbers message
    let negativeNumbersError: string = "";

    //calculate the sum of the numbers
    for (let number of numbers) {
      let value: number = parseInt(number);
      // handle new lines at end or beginning of string
      if (isNaN(value)) throw Error("Invalid input");
      // handle negative numbers
      else if (value < 0) negativeNumbersError += number + ",";
      // Ignore numbers greater than 1000
      else if (value > 1000) continue;
      else sum += value;
    }

    // throw error if negative numbers are present
    if (negativeNumbersError != "")
      throw Error("Negatives not allowed : " + negativeNumbersError);
    return sum;
  }

  handleMultipleDifferentDelimiters(si: number, ei: number): void {
    /*
     ** @description : This function will handle multiple different delimiter and Modify input string
     ** @param : si : number - start index of delimiter,
     ** @param : ei : number - end index of delimiter
     ** @return : void
     */

    //delimiter part of string
    let delimiter_str: string = this.input_str.substring(si, ei + 1);
    //number part of string
    this.input_str = this.input_str.substring(ei + 1);

    //extracting all delimiters from the string using regex
    let all_delimiters: string[] = delimiter_str.match(/\[(.*?)\]/g) || [];

    //extracting the delimiters from the string
    all_delimiters.forEach((delimiter) => {
      //removing the brackets from the delimiter
      delimiter = delimiter.slice(1, -1);
      // convert special characters to escape characters for regex
      let escapedDelimiter: string = delimiter.replace(/[-^$*+?.|]/g, "\\$&");
      //creating a regex pattern for the delimiter
      let regex: RegExp = new RegExp(escapedDelimiter, "g");
      //replacing the delimiter with comma
      this.input_str = this.input_str.replace(regex, ",");
    });
  }
}
export default Calculator;
