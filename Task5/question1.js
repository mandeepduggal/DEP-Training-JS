// http://www.codewars.com/kata/array-helpers

Array.prototype.square = function() {
    let arr = this;
    let tempArr = [];
    for (i = 0; i < arr.length; i++) {
        tempArr.push(arr[i] * arr[i]);
    }
    return tempArr;
}

Array.prototype.cube = function() {
    let arr = this;
    let tempArr = [];
    for (i = 0; i < arr.length; i++) {
        tempArr.push(arr[i] * arr[i] * arr[i]);
    }
    return tempArr;
}

Array.prototype.sum = function() {
    let arr = this;
    let total = 0;
    for (i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

Array.prototype.average = function() {
    let arr = this;
    let total = 0;
    console.log(this);
    for (i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return arr.length > 0 ? total / arr.length : NaN;
}

Array.prototype.even = function() {
    let arr = this;
    let tempArr = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}

Array.prototype.odd = function() {
    let arr = this;
    let tempArr = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}
