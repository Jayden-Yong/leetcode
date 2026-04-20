/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const catalog = new Map();
    for (let char of magazine) {
        catalog.set(char, (catalog.get(char) || 0) + 1);
    }

    for (let char of ransomNote) {
        if (catalog.get(char) && catalog.get(char) != 0) {
            catalog.set(char, catalog.get(char) - 1);
        } else {
            return false;
        }
    }

    return true;
};