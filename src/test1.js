function isAllTrue(array, fn) {


    if ((Array.isArray(array) == false) || (array.length <= 0)) {
        throw new Error("empty array");
    }
    if (typeof fn != 'function') {
        throw new Error("fn is not a function");
    }

    for (let i = 0; i < array.length; i++) {
        // console.log(array[i]);
         // на каждой итерации вызываем fn и в качестве аргумента передаем элемент массива и результат сравнения записываем в с
        if (fn(array[i])) { // если результат сравнения false, то увеличиваем переменную b
            return true;
        }

    }
    return false;
}
console.log(isAllTrue([1, 2, 30, 4, 5], n => n > 20)) // вернет true
console.log(isAllTrue([1, 2, 3, 4, 5], n => n > 20)) // вернет false