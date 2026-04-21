/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let cleaned = s.trim().split(/\s+/);
    return cleaned[cleaned.length-1].length;
};