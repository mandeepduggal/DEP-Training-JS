// http://www.codewars.com/kata/function-cache

function cache(func) {

    var obj = {}
    var arr = new Array();
    return function(arg1, arg2) {
        let arr1 = new Array();
        arr1.push(arg1);
        arr1.push(arg2);

        let strArr1 = JSON.stringify(arr1);
        if (!(arr.includes(strArr1))) {
            arr.push(strArr1);
            obj[strArr1] = func(arg1, arg2);
            return obj[strArr1];
        } else {
            return obj[strArr1];
        }
    }
}
