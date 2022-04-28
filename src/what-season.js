const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const season = ['winter', 'spring', 'summer', 'autumn'];
  if ((date instanceof Date === false || Object.getOwnPropertyNames(date).length > 0) && arguments.length > 0) {
    throw new Error('Invalid date!');
  } 
  if (date == null) {
    return 'Unable to determine the time of year!'
  } 
  let month = date.getMonth();
  if (month === 11 || month <= 1) {
    return season[0];
  } else if (month > 1 && month <=4) {
    return season[1];
  } else if (month > 4 && month <= 7) {
    return season[2];
  } else {
     return season[3];
  }
  
}

module.exports = {
  getSeason
};
