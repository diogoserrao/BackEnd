function drawSquare(height,width){
    for (var i = 0; i < height; i++){
        var line = "";
        for (let j = 0; j < width; j++){
            line += "*";
            
        }
        console.log(line);
    } 
}

drawSquare(10,10);