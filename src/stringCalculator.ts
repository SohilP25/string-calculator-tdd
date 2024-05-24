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
    return -1;
}
} 
export default Calculator;