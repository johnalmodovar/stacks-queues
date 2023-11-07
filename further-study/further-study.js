const Queue = require("../queue");
const Stack = require("../stack");

function stringReversal(str) {
  let stack = new Stack();
  let reversed = "";

  for (let letter of str) {
    stack.push(letter);
  }


  while (stack.size > 0) {
    reversed += stack.pop();
  }

  return reversed;
}

/*
psuedo for stringReversal:
first stack: [h,e,l,l,o]
second stack: [o,l,l,e,h]
*/

/* "   "
   ()[]
   ([])
   ((()))

   (
   (]
   (()[)]

   stack - ()
           []
           {}
   queue -
   deque - (()[)]
*/
function balancedBrackets(str) {

}

function josephusSurvivor(peopleNum, skip) {
}

function calculator(input) {
}

module.exports = {
  calculator,
  josephusSurvivor,
  balancedBrackets,
  stringReversal,
};

/*
Browser back/forward

Push each site you visit, to go back you pop and push to the 2nd stack, and go to top of stack
google, yahoo, ebay

ebay, yahoo

*/