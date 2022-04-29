const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    str = String(str);

    options.addition = (options.addition === undefined) ? '' : String(options.addition);
    options.separator = (options.separator === undefined) ? '+' : options.separator;
    options.additionSeparator = (options.additionSeparator === undefined) ? '|' : options.additionSeparator;
    options.repeatTimes = (options.repeatTimes === undefined) ? 1 : options.repeatTimes;
    options.additionRepeatTimes = (options.additionRepeatTimes === undefined) ? 1 : options.additionRepeatTimes;

    let resStr = new Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator);
    return new Array(options.repeatTimes).fill(str + resStr).join(options.separator);

}

// repeater('la', { repeatTimes: 3, separator: 's' })

module.exports = {
  repeater
};
