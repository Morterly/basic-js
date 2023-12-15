// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = [];
  let obj = {};
  for (let i = 0; i < domains.length; i += 1) {
    let dArr = domains[i].split('.').reverse();
    for (let j = 0; j < dArr.length; j += 1) {
      if (j !== 0) {
        dArr[j] = `${dArr[j-1]}.${dArr[j]}`;
      } else {
        dArr[j] = `.${dArr[j]}`;
      }
    }
    arr = arr.concat(dArr);
  }
  for (let i = 0; i < arr.length; i += 1) {
    const key = arr[i];
    obj.hasOwnProperty(key) ? obj[key] += 1 : obj[key] = 1;
  }
  return obj;
}

module.exports = {
  getDNSStats
};
