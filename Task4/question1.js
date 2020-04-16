// http://www.codewars.com/kata/using-closures-to-share-class-state

var totalWeight = 0,
    count = 0;
var Cat = function(name, weight) {

    if (!name && !weight)
        throw Error;

    this.name = name;
    totalWeight += weight;
    count++;

    Object.defineProperty(this, 'weight', {
        get: function() { return weight; },
        set: function(value) {
            totalWeight -= weight;
            totalWeight += value;
            weight = value;
        }
    })

};

Cat.averageWeight = function() {
    return totalWeight / count;
}
