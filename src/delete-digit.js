// const { NotImplementedError } = require('../extensions/index.js');

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
  let arr = [];
  let nStr = n.toString();
  for (let i = 0; i < nStr.length; i += 1) {
    let a1 = nStr.split('');
    a1.splice(i, 1);
    arr.push(a1.join(''));
  }
  return Math.max.apply(null, arr);
}

module.exports = {
  deleteDigit
};
