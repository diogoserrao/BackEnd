

module.exports ={
    isEmpty: function(array){
        if (array.length == 0 ){
            return array.length == 0
            
        }
    },
    max: function(array){
        max = array[0];
        for (i = 0; i < array.length; i++)
            var numero = array[i];
            if(numero > max)
                max = numero           
            return max;
         
    },
    min: function(array){
        min = array[0];
        for (i = 0; i < array.length; i++)
            var numero = array[i]
            if(numero < min)
                min = numero
                return min;
    },
    average: function(array){
        var av = 0;
        for (i = 0; i < array.length; i++)
            av += array[i];
            var avg = av/array.length;
            return avg
    },
    indexOf: function(array,value){
        var index = -1;
        for (i = 0; i < array.length; i++)
            if (array[i] === value)
                index = i;
        return index     
    },
    subArray: function(array, startIndex, endIndex){
        sub = [];
        for (i = startIndex; i <= endIndex; i++)
                sub.push(array[i]);
       return sub
    },
    isSameLength: function(a1, a2){
        if (array.length == 0 ){
            console.log("Array Empty")
        }
    },
    reverse: function(array){
        if (array.length == 0 ){
            console.log("Array Empty")
        }
    },
    swap: function(array, index1, index2){
        if (array.length == 0 ){
            console.log("Array Empty")
        }
    },
    contains: function(array, value){
        if (array.length == 0 ){
            console.log("Array Empty")
        }
    },
}

