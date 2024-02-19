function reversedstrwords(str) {
    var words = str.split(" "); // ["Hoje" , "é" , "Domingo"]
    var reversedstr = "";
    for (var i = 0; i < words.length; i++){
        var word = words[i];
        for (var j = word.length - 1; j >= 0; j--){
            var letter = word[j];
            reversedstr += letter;
        }
        reversedstr += " ";
    }
    return reversedstr;
}

var rev = reversedstrwords("Hoje é Domingo");
console.log(rev);