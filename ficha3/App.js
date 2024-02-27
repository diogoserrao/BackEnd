function started(){
    console.log("Started Download")
}
function updated(value){
    console.log( value + "% of Download")
    
}
function completed(){
    console.log("Download Completed")

}
function performDownload(start, update, complete){
    start();
    for(let i = 0; i < 100; i++){
        update(i);
    }
    complete();
}

//performDownload(started, updated, completed);

var arayutils = require("./ArrayUtils");
var array = [2,7,9,5,3]
var max = arayutils.subArray(array,1,3);
console.log(max)

