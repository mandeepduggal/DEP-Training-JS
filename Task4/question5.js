// http://www.codewars.com/kata/function-composition-1

function compose(...args) {
    return function(num) {
        for (let i = args.length - 1; i >= 0; i--) {
            num = args[i](num);
        }
        return num;
    }
}
