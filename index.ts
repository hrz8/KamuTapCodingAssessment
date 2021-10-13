import { Solution } from "./solution";


const isBracketBalance = new Solution("(", ")"); 
console.log("()() is " + isBracketBalance.solve("()()"));
console.log("()( is " + isBracketBalance.solve("()("));
