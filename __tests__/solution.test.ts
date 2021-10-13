import { Solution } from "../solution";

describe("testing the balance bracket '(' and ')'", () => {
  const isBracketBalance = new Solution("(", ")");

  test("should return true when bracket is balance", () => {
    expect(isBracketBalance.solve("()")).toBe(true);
    expect(isBracketBalance.solve("()()")).toBe(true);
    expect(isBracketBalance.solve("")).toBe(true);
    expect(isBracketBalance.solve("((()))")).toBe(true);
  });

  test("should return false when bracket is not balance", () => {
    expect(isBracketBalance.solve(")(")).toBe(false);
    expect(isBracketBalance.solve("((()")).toBe(false);
  });
});

describe("testing the error opening and closing tag", () => {

  test("should return error when the open tag not char", () => {
    expect(() => { const s = new Solution("", ")") }).toThrow(Error);
  });
});
