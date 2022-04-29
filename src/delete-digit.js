const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let strOfNum = n.toString()
  
    let res = 0;
    let num;
    for (let i = 0; i < strOfNum.length; i++) {
        if (i === 0) {
            num = Number(strOfNum.slice(1))
        } else {
            num = Number(strOfNum.slice(0, i) + strOfNum.slice(i + 1))
        }

        if(num > res)
        res = num; 
    }
    return res;
}

deleteDigit(152)

module.exports = {
  deleteDigit
};
