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
  const obj = str.split('').reduce((acc, rec) => ({
    ...acc,
    [rec]: typeof acc[rec] === 'undefined' ? 1 : acc[rec] + 1,
  }), {});
  return Object.entries(obj)
    .map((item) => item.filter((it) => it !== 1))
    .reverse()
    .join()
    .replace(',', '')
    .replace(',', '')
    .replace(',', '')
    .replace(',', '')
    .replace(',', '')
    .split('')
    .reverse()
    .join()
    .replace(',', '')
    .replace(',', '')
    .replace(',', '')
    .replace(',', '')
    .replace(',', '');
}

module.exports = encodeLine;
