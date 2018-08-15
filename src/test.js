function sum (a, b) {
    return a * b;
}

function bindFunction(fn) {
    var bindArgs = [].slice.call(arguments, 1);

        return function F() {

        var fnArgs = [].slice.call(arguments);
        return fn.apply(null, bindArgs.concat(fnArgs));

        console.log(bindArgs);
        console.log(fnArgs);

    };
};

var newSum = bindFunction(sum, 2, 4);

console.log(newSum());

