function slice(array, from, to = 0) {
    let newArray = [];
    let arrElem = array.length;
    let negativeEl = arrElem * -1;


    if (from === 0 && to === 0){
        return newArray;

    }  else if (from === 0 && to < negativeEl){
        to = array.length;
        console.log(to);

    }else if (from === 0 && to < 0){
        to = array.length - Math.abs(to);
    }

    if (from < 0){
        from = array.length - Math.abs(from);


        if(from <= 0 ){
            from = 0;
        }
    }

    if (to >= array.length || to === 0){
        to = array.length;

    } else if (to <= 0){
        to = Math.abs(to);

    }



    // if (from < 0){
    //     from = array.length - Math.abs(from);
    //
    //     if(from <= 0 ){
    //         from = 0;
    //     }
    //
    // }

    // console.log(negativeEl);
    // console.log(from);
    // console.log(to);
    for(let i = from; i< to; i++){
        newArray.push(array[i]);
    }
    return newArray;
}

console.log('-----------');
console.log(slice(["Почему", "надо", "учить", "JavaScript"], -999, -4));
