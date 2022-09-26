const fibonacci = function(n) {
    if (n < 0) {
        return 'OOPS';
    }
    arr = [1, 1];
    if (n == 1 || n == 2) {
        return arr[n - 1];
    }
    if (n > 2) {
        let counter = 2;
        while (arr.length != n) {
            arr[counter] = arr[counter - 1] + arr[counter - 2];
            counter++;
        }
        return arr[n - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
