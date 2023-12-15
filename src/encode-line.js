// const { NotImplementedError } = require('../extensions/index.js');

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
  let resultStr = '';
  // const uniqueArr = Array.from(new Set(str.split('')));
  // for (let i = 0; i < uniqueArr.length; i += 1) {
  //   let number = str.split('').filter(e => e === uniqueArr[i]).length;
  //   if (number === 1) {
  //     number = '';
  //   }
  //   resultStr += number + uniqueArr[i];
  // }

  for(let i = 0; i < str.length;) {
    let count = 1;
    for (let j = i + 1; j < str.length; j += 1) {
      if (str[i] === str[j]) {
        count += 1;
      } else {
        break;
      }
    }
    resultStr += count + str[i];
    i += count;
  }
  return resultStr.replaceAll('1', '');
}

module.exports = {
  encodeLine
};
