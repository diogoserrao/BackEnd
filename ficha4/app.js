var object= {
name: "Diogo",
age: "19",
gender: "male"
}

var convert = JSON.stringify(object)
var object2 = '{"name": "Diogo", "age":"19", "gender":"male"}';
var convert2 = JSON.parse(object2);
console.log(convert2.name)
console.log(convert)