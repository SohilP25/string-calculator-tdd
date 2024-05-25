import Calculator from "../src/stringCalculator";


// function to assert the add function value
function assertValue(input_string:string,expected:number){
  const calculator = new Calculator(input_string);
  expect(calculator.add()).toBe(expected);
}

describe("Diffrent count of number into string", () => {

  test("Empty string returns zero", () => {
    assertValue("",0);
    assertValue("  ",0);
  });

  test("single number in the string", () => {
    assertValue("1",1);
  });

  test("two numbers in the string", () => {
    assertValue("1,2",3);
  });

  test("multiple numbers in the string", () => {
    assertValue("4,22,0,33,53,32,3",147);
  });

});
