const reverseString = function(string) {
    let answer = "";
    let counter = string.length;
    while (counter != 0) {
        answer += string[counter - 1];
        counter -= 1;
    }
    
    return answer;
};

// Do not edit below this line
module.exports = reverseString;
