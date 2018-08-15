function isSomeTrue(array, fn) {
    let a = 0; // переменные нужны для проверки массива
    let b = 0;

    if (( Array.isArray(array) == false ) || (array.length <= 0)) {
        throw new Error("empty array");
    } else if (typeof fn != 'function') {
        throw new Error("fn is not a function");
    } else {

        for (let i = 0; i < array.length; i++) {
            let c = fn(array[i]); // на каждой итерации вызываем fn и в качестве аргумента передаем элемент массива и результат сравнения записываем в с
            if (c == false) { // если результат сравнения false, то увеличиваем переменную b
                b++;
            } else if (c == true) { // если результат сравнения true
                a = true;
                break;  // прерываем цикл, если хоть одно условие true

            }


        }

    }

    if (a == true){
        return true;
    } else if (b > 0) {
    return false; // иначе false
    }

}



console.log(isSomeTrue([1, 2, 30, 4, 5], n => n > 20)) // вернет true
console.log(isSomeTrue([1, 2, 3, 4, 5], n => n > 20)) // вернет false