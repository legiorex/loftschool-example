var arr = [0, 1, 2, 3, 4];

function fn(previousValue, currentValue, index, array) {

    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
    return previousValue + currentValue;
}

/*
0
1
1
[ 0, 1, 2, 3, 4 ]
1
2
2
[ 0, 1, 2, 3, 4 ]
3
3
3
[ 0, 1, 2, 3, 4 ]
6
4
4
[ 0, 1, 2, 3, 4 ]
10
*/

function reduce(array, fn, previousValue, index = 0) {
    console.log(index);
    console.log(array[index]);

    if (index >= array.length){
        return 0;
    }

    return reduce(array, fn, previousValue, ++index)
}


var result = reduce(arr, fn);

console.log(result);