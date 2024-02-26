var students = [];
var s1 = {name:"Pedro Matos", number:20033, grade:17.8};
var s2 = {name:"Nuno Matos", number:29023, grade:19.8};
var s3 = {name:"Pedro Olim", number:26033, grade:10.1};
var s4 = {name:"Duarte Rob", number:20733, grade:15.6};
var s5 = {name:"Francisco Freitas", number:30433, grade:12.4};
console.log(s2["name"])
console.log(s2.name)
students.push(s1);
students.push(s2);
students.push(s3);
students.push(s4);
students.push(s5);

function listStudents(students){
    for(let i = 0; i < students.length; i++){
        const s = students[i];
        console.log("O Aluno " + s.name + " Numero " + s.number + " Tem media de " + s.grade + " Final.");
    }
}

listStudents(students);

function getBestStudent(students){
    let bestStudent = students[0];
    for (let i = 1; i < students.length; i++){
        const grade = students[i].grade;
        if(grade > bestStudent.grade){
            bestStudent = students[i];
        }
    }
    return bestStudent
}


listStudents = students
const best = getBestStudent(students)
console.log("O melhor aluno tem o número: " + best.number + " cujo nome é " + best.name + " com a média de " + best.grade )



function countPositives(students){
    var count = 0;
    for (let i = 0; i < students.length; i++){
        if(students[i].grade >= 9.5)
        count++
    }
    return count
}

const nome = "diogo"
nome = "aurelio"
console.log(nome)