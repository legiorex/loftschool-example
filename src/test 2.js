function isMatching(full, chunk) {

    for(i=0; i < full.length; i++){

        console.log(i);

        var x = full.indexOf(chunk, i);

        console.log(x);



        if(x == -1){
            return false;
        } else  {
            i = x + 1 ;
        }

        console.log(x);

    }
}

isMatching('Moscow', 'Mos');