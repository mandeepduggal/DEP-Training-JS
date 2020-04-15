// http://www.codewars.com/kata/prefill-an-array

function prefill(n, v) {

    if (isNaN(n) || Number(n) == NaN || n === Infinity || n === -Infinity || n < 0 || typeof(n) == 'boolean' || n % 1 != 0)
        throw new TypeError(n + " is invalid");
    else {
        arr = (new Array(Number(n))).fill(v);
    }
    return arr;
}
