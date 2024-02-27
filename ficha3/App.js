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
var empty = arayutils.isEmpty(array);
var max = arayutils.max(array);
var min = arayutils.min(array);
var averg = arayutils.average(array);
var index = arayutils.indexOf(array,4);
var sub = arayutils.subArray(array,1,3);
var samelenght = arayutils.isSameLength(array,[1,4,6,7]);
var rev = arayutils.reverse(array,[1,4]);
var swp = arayutils.swap(array,1,3);
var constain = arayutils.contains(array,1);
var concat = arayutils.concatenate(array,[1,4]);
console.log(empty)
console.log(max)
console.log(min)
console.log(averg)
console.log(index)
console.log(sub)
console.log(samelenght)
console.log(rev)
console.log(swp)
console.log(constain)
console.log(concat)

