/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for(let i = 0; i < array.length; i++){
        fn(array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push(fn(array[i], i, array));
    }
    return newArray;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    var x = initial || array[0],
        i = initial ? 0 : 1;

    for (; i < array.length; i++) {
        x = fn(x, array[i], i, array);
    }

    return x;
}
/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    let newArray = [];
    for(let name in obj){
        newArray.push(name.toUpperCase());
    }
    return newArray;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to = 0) {
    let newArray = [];
    let arrElem = array.length;

    if ( from > array.length){
        from = 0;

    } else if (from < 0){
        from = array.length - Math.abs(from);

        if(from <= 0 ){
            from = 0;
        }
    }

    if (to >= array.length){
        to = array.length;

    } else if (to <= 0){
        to = Math.abs(to);
    }

    for(let i = from; i< to; i++){
        newArray.push(array[i]);
    }
    return newArray;
}
/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    var p = new Proxy(target, handler);
    var handler = {
        get: function(target, name){
            return name in target?
                target[name] :
                37;
        }
    };
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
