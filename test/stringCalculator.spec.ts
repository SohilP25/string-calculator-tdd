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

describe('Handle different delimiters', () => {
  test('Handle different delimiters', () => {
    assertValue("//;\n1;2",3);
  });
  test('Handle different delimiters', () => {
    assertValue("//.\n3.2.5.6",16);
  });
});

describe('Handle negative numbers', () => {
  test('Handle negative numbers', () => {
    assertValue("1,-2",-1,"Negatives not allowed : -2");
  });

  test('Handle negative numbers', () => {
    assertValue("//;\n1;-2;3;-4",-1,"Negatives not allowed : -2,-4");
  });
});


describe('Ignore number bigger than 1000.', () => {
  test('Number bigger than 1000?, Ignored.', () => {
    assertValue("4,1001,2",6);
    assertValue("//:\n21:2333:5:40: 1000:4 ",1070)
  });
});

describe('Handle different delimiters of any length', () => {
  test('Handle different delimiters of any length', () => {
    assertValue("//[***]\n1***2***3",6);
  }
  );
  test('Handle different delimiters of any length', () => {
    assertValue("//[**]\n1**2**3",6);
  }
  );  
});

describe('Handle multiple delimiters', () => {
  test('Handle multiple delimiters', () => {
    assertValue("//[*][%]\n1*2%3",6);
  }
  );
  test('Handle multiple delimiters of different length', () => {
    assertValue("//[**][%%]\n1**2%%3",6);
  }
  );  
});