// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = arr instanceof Array ? 1 : 0;
    let arr1 = [0];
    for (let i = 0; i < arr.length; i += 1) {
      if (Array.isArray(arr[i])) {
        arr1.push(this.calculateDepth(arr[i]));
      }
    }
    count += Math.max.apply(0, arr1);
    return count;
  }
}

module.exports = {
  DepthCalculator
};
