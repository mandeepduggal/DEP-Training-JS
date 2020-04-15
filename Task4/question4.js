// http://www.codewars.com/kata/function-composition

function compose(f, g) {
    // Compose the two functions here!
    return function(...args) {
        return f(g(...args))
    }
}
