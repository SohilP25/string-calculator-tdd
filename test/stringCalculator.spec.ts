import Calculator from "../src/stringCalculator";

const calculator = new Calculator();

    test("Empty string", () => {
      expect(calculator.add("")).toBe(0);
    });