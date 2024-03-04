function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName
}


Person.prototype.age = 0;

Person.prototype.greet = function(){
    console.log("Hello " + this.firstName +" " + this.lastName +" " + this.age);
}
var diogo = new Person ("Diogo", "Serrao");
diogo.age = 19;
diogo.greet();

var rodrigo = new Person ("Rodrigo", "Ribeiro");
rodrigo.age = 23;
rodrigo.greet(); 

console.log(diogo.__proto__);
console.log(rodrigo.__proto__);
