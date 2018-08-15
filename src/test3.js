function returnBadArguments(fn) {
    let newArray = [];

    for(let i = 1; i < arguments.length; i++) {

        fn(arguments[i]);
    }


    if(typeof fn != 'function') {
        throw new Error("fn is not a function");
    };

    try {
        fn();
    }
    catch (e) {
        newArray.push(e.cause)
    }

    return newArray;
}

returnBadArguments(1,2);