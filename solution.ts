export class Solution {
  constructor(
    private openingTag: string,
    private closingTag: string
  ) {
    if (this.openingTag.length !== 1 || this.closingTag.length !== 1) {
      throw new Error("opening and closing tag should be a char");
    }
  }

  private validate(s: string): boolean {
    const rgxValidator = new RegExp(
      `^[\\${this.openingTag}\\${this.closingTag}]{0,100000}\$`
    );
    return rgxValidator.test(s);
  }

  private determineTheBalance(s: string): boolean {
    const stack: number[] = [];
    for (let i = 0; i < s.length; i++) {
      const curr = s[i];
      if (curr === "(") {
        stack.push(1);
        continue;
      }
      if (curr === ")") {
        stack.pop();
        continue;
      }
    }
    return stack.length === 0;
  }

  public solve(s: string): boolean {
    if (!this.validate(s)) {
      return false;
    }
    return this.determineTheBalance(s);
  }
}
