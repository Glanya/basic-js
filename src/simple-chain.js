const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    chainArr: [],
  getLength() {
      return this.chainArr.length;
  },

  addLink(value) {
      this.chainArr.push('( ' + value + ' )');
      return this;
  },

  removeLink(position) {
      if (typeof position !== 'number' || position > this.chainArr.length || position <= 0 ) {
        this.chainArr = [];
        throw new Error("You can't remove incorrect link!");
      }
      this.chainArr.splice(position - 1, 1);
      return this;
  },
  
  reverseChain() {
      this.chainArr.reverse();
      return this;
  },

  finishChain() {
      let chain = this.chainArr;
      this.chainArr = [];
      return chain.join('~~')

  }
};

module.exports = {
  chainMaker
};
