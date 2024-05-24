import Calculator from "../src/stringCalculator";

const calculator = new Calculator();

describe("Diffrent count of number into string", () => {
  test("Empty string returns zero", () => {
    expect(calculator.add("")).toBe(0);
    expect(calculator.add("  ")).toBe(0);
  });
});
