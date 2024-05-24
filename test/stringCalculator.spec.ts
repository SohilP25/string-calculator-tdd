import Calculator from "../src/stringCalculator";

const calculator = new Calculator();

describe("Diffrent count of number into string", () => {
  
  test("Empty string returns zero", () => {
    expect(calculator.add("")).toBe(0);
    expect(calculator.add("  ")).toBe(0);
  });

  test("single number in the string", () => {
    expect(calculator.add("1")).toBe(1);
  });

  test("two numbers in the string", () => {
    expect(calculator.add("1,2")).toBe(3);
  });

  test("multiple numbers in the string", () => {
    expect(calculator.add("4,22,0,33,53,32,3")).toBe(147);
  });

});
