

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
        if(a1.length == a2.length){
            return true;
        }
        else 
            return false;
    },
    reverse: function(array){
       var rev = [];
       for(i = array.length; i >=0; i--){
          rev.push(array[i]); 
       }
       return rev;
    },
    swap: function(array, index1, index2){
       var temp = array[index1];
       array[index1] = array[index2];
       array[index2] = temp;
       return array
    },
    contains: function(array, value){
        return this.indexOf(array, value) != 1;    
    },
    concatenate: function(a1, a2){
        var temp = [];
        for(let i = 0; i < a1.length; i++){
            temp.push(a1[i]);
        }
        for(let i = 0; i < a2.length; i++){
            temp.push(a2[i]);
        }
       return temp
        

    },
}

