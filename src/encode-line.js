const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let res = '';
    let index = 1;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == str[i+1]) {
        index++;  
      } else if(index === 1) {
          res += str[i];
      } else {
          res += index + str[i];
          index = 1;
      }
    }
    return res;
}

// encodeLine('aaaatttt')

module.exports = {
  encodeLine
};
