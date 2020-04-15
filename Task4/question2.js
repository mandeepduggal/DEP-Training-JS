// http://www.codewars.com/kata/a-chain-adding-function

function add(n) {
    let tempfunc = function(number) {
        return add(number + n);
    }
    tempfunc.valueOf = function() {
        return n;
    }
    return tempfunc;
}
