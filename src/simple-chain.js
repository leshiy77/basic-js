const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 "use strict"
const chainMaker = {
  arr: Array(),
  getLength() {
   arr.push(`(${this.arr.length})`)
  },
  addLink(value) {
    this.arr.push(`(${value})`)
  },
  removeLink(position) {
    arr.pop(position)
  },
  reverseChain() {
    arr.reverse()
  },
  finishChain() {
   return this.arr.join('~~')
  }
};
module.exports = {
  chainMaker
};
