import Calculator from "../src/stringCalculator";


// function to assert the add function value
function assertValue(input_string: string, expected: number, message?: string) {
  const calculator = new Calculator(input_string);
  if (expected == -1) {
    expect(() => calculator.add()).toThrow(message);
  } else {
    expect(calculator.add()).toBe(expected);
  }
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

describe('Handle new lines in string', () => {
  test('Handle new line between numbers', () => {
    assertValue("22\n2,32",56);
  });
  test("Handle new line at beginning or end of string", () => {
    assertValue("\n22\n2,32",-1,"Invalid input");
    assertValue("22\n2,32\n",-1,"Invalid input");
  });
});
