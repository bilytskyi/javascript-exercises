const palindromes = function (text) {
    text = text.toLowerCase();
    let reverseText = text.split("").filter(word => word != ' ' && word != ',' && word != '!' && word != '.').reverse().join("");
    text = text.split("").filter(word => word != ' ' && word != ',' && word != '!' && word != '.').join("");
    console.log(reverseText);
    console.log(text);
    if (text == reverseText) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
