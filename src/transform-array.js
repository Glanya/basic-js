const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

    let resultArr = [...arr];
    resultArr.forEach((item, i) => {
        if(item === '--double-next'){
            resultArr[i] = resultArr[i + 1];
        }

        if(item === '--double-prev'){
            resultArr[i] = resultArr[i - 1];
        }

        if(item === '--discard-next'){
            resultArr[i] = undefined;
            resultArr[i + 1] = undefined;
        }

        if(item === '--discard-prev'){
            resultArr[i] = undefined;
            resultArr[i - 1] = undefined;
        }
    });
    return resultArr.filter((item) => (item !== undefined));
}


module.exports = {
  transform
};
