const express = require('express')
const mysql = require('mysql2')
const app = express()
const port = 3000

app.use(express.json());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'persons'
})

app.get('/persons', (req, res) => {
    connection.query("select * from persons.persons", (err, result, fields)=>{
        res.send(result);
    })
})

app.post('/persons', (req, res) => {
    var newPerson = req.body;
    console.log(newPerson)
    connection.execute( 
        "insert into persons(Firstname, Lastname, Profession, Age )  values ( ?, ?, ?, ?)",

    [newPerson.Firstname, newPerson.Lastname, newPerson.Profession, newPerson.Age],(err, result, fields)=>{
        console.log(err,result, fields)
            res.send(result);
        })
        
});

app.delete('/persons/:id', async(req,res) => {
    const id = req.params.id;
    connection.query(
        "Delete from persons Where person_id =?;", [id],(err, result, fields)=>{
            if (err)
                res.status(500).send(JSON.stringify(err));
            else
                res.send(result);
        })
    });

app.put('/persons/:id', (req, res) => {
    var newPerson = req.body;
    console.log(newPerson)
    connection.execute( 
        "insert into persons(Firstname, Lastname, Profession, Age )  values ( ?, ?, ?, ?)",

    [newPerson.Firstname, newPerson.Lastname, newPerson.Profession, newPerson.Age],(err, result, fields)=>{
        console.log(err,result, fields)
            res.send(result);
        })
        
});
//post-insert
//get-select
//put-update
//delete-delete