const repeatString = function(string, num) {
    let answer = string;
    if (num < 0) {
        return "ERROR";
    }
    else if (num == 0) {
        return "";
    }
    else {
        for (i = 1; i < num; i++) {
            answer += string;
        }
        return answer;
    }
};

// Do not edit below this line
module.exports = repeatString;
