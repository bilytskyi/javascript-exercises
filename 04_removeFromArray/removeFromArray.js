const removeFromArray = function(arr, ...others) {
    let newArr = arr.filter(number => !(others.includes(number)));
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
