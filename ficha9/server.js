const express = require('express')
const mysql = require('mysql2')
const app = express()
const port = 3000
const swaggerFile = require('./swagger_output.json');
const swaggerUi = require('swagger-ui-express');
const { Sequelize } = require('sequelize');

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '12345',
//     database: 'persons'
// })



const sequelize = new Sequelize('ficha9', 'root', '12345',{ 
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
    .then (() => {
        console.log("Connection has been established");
    })
    .catch(err => {
        console.log("Unable to connect", err);
    });

const Persons = sequelize.define('Person', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    profession: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
    });


sequelize.sync({ force: false})
    .then(() => {
        console.log('DataBase & tables created!');
    }) .then (function () {
        return Persons.findAll ();
    }).then (function (persons) {
        console.log(persons);
    });

sequelize.sync()
.then(() => {
    console.log("Sincronized with data base.");
    return Persons.bulkCreate([
        { firstName: 'Rodrigo', lastName: 'Olim', profession: 'Engenheiro', age: 22 },
        { firstName: 'Diogo', lastName: 'Serrão', profession: 'Pedreiro', age: 19 },
        { firstName: 'Guilherme', lastName: 'Jesus', profession: 'Subsidio Dependente', age: 60 }
    ]);
})
.then(() => {
    console.log("Users added successfully.");
})
.catch(err => {
    console.error("Error when synchronizing:", err);
});

app.get("/persons", (req, res) => {
    Persons.findAll()
    .then(users => {
    res.send(users);
    });
});

app.post("/persons", (req, res) => {
    Persons.create({ firstName: "Leonardo", lastName: "Fernandes", profession: "Curioso", age: 90 }).then(() => {
    res.send("Added successfully!");
    });
});

app.delete("/persons", (req, res) => {
    Persons.destroy({
        where: {
            id: 11
        }
    }).then(() => {
        res.send("User destroyed!");
    });
});

app.delete("/persons/:id", (req, res) => {
    Persons.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.send("The user you have been choosed has been destroyed!");
    });
});

app.get("/persons/:id", (req, res) => {
    Persons.findByPk(req.params.id).then((user) => {
        if (user) {
            res.send(user);
        } else {
            res.status(404).send("User not found!");
        }
    });
});

app.get("/persons/:age/:profession", (req, res) => {
    Persons.findAll({
        where: {
            age: req.params.age,
            profession: req.params.profession
        }
    }).then((users) => {
        if (users.length > 0) {
            res.send(users);
        } else {
            res.status(404).send("No users found with the specified age and profession.");
        }
    });
});

app.put('/persons/:id', (req, res) => {
const body = req.body;
    Persons.update({
        firstName: body.firstName,
        lastName: body.lastName,
        age: body.age,
        profession: body.profession
        }, {
        where: {
            id: req.params.id
        }
        }).then(() => {
            res.send(body);
        });
});