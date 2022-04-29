const { NotImplementedError } = require('../extensions/index.js');

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
  let result = {}
  domains.forEach(elem => {
    let domainsArr = [];
    elem.split('.').forEach(dom => {
      domainsArr.push(`.${dom}`)
    })
    domainsArr.reverse()
    for (let i = 0; i<domainsArr.length; i++) {
      dns = domainsArr.slice(0, i+1).join('');
      if (dns in result) {
        result[dns] += 1;
      } else {
        result[dns] = 1;
      }
    }
  })
  return result
}

module.exports = {
  getDNSStats
};
