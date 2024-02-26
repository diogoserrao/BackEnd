function drawBox(height, width){
    for(var i = 0; i < height; i++){
        var line = "";
        for(let j = 0; j < width; j++){
            if(i == 0 || i == height-1  || j == 0 ||j == width-1){
                line += "*";
            }
            else{
                line += " ";
            }
         }
    console.log(line);
    }
}

drawBox(5, 5);