const palindromes = function (sentence) {
    cleanSentence = sentence.replace(/[^A-Z0-9]/ig, '');
    cleanSentence = cleanSentence.toLowerCase();
    let reverseString = cleanSentence[cleanSentence.length - 1];
    for (let i = cleanSentence.length-2; i >= 0; i--) {
        reverseString = reverseString.concat(cleanSentence[i]);
    }
    return cleanSentence===reverseString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
