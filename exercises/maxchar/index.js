// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const obj = {};

    str.split('').forEach(i => {
        obj[i] = obj[i]+1 || 1;
    })

    const keys = Object.keys(obj)
    const sortable = [];

    return keys.sort((a,b) => {obj[b]-obj[a]})[0];
}


maxChar('abcdefghijklmnaaaaa')

module.exports = maxChar;
