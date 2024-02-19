function countOccurrences(str, character){
    var count = 0;
    for (let i = 0; i < str.length; i++){
        if(str[i] == character )
            count++;
    }
    return count;
}

var count = countOccurrences("Hoje e Domingo", "o");
console.log(count);