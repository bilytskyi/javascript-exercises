const sumAll = function(a, b) {
    let answer = 0;
    if (a > 0 && b > 0 && typeof a == typeof 5 && typeof b == typeof 5) {
        if (a < b) {
            for (i = a; i <= b; i++) {
                answer += i;
            }
        }
        else if (b < a) {
            for (i = b; i <= a; i++) {
                answer += i;
            }
        }
        return answer;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
