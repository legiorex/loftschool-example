function delayPromise(seconds) {
    var seconds;
    var ms = seconds * 1000;
    return new Promise((resolve) => {


        setTimeout(() => {
            resolve();

            console.log('resolve')

        }, ms)

    });

}

delayPromise(3);
