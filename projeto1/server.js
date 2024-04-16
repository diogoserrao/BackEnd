const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "clinic",
});

app.get("/appointments", (req, res) => {
  connection.query("select * from appointments", (err, result, fields) => {
    if (err) {
      console.error("Erro ao executar consulta:", err);
      res.status(500).send("Erro ao recuperar consultas.");
      return;
    }
    res.send(result);
  });
});
// PARTE B
// e-Listar todas as consultas ordenadas por ordem crescente de duração e devolver a lista ordenada na resposta. A ordenação terá que ser efetuada em Javascript.
app.get("/appointments/duration", async (req, res) => {
  console.log("entrou");
  connection.query("SELECT * FROM appointments", (err, result, fields) => {
    console.log(result);
    if (err) {
      console.error("Erro ao executar a consulta:", err);
      res.status(500).send("Erro ao buscar compromissos por duração.");
      return;
    } 
      result.sort((a, b) => a.duration - b.duration);
      res.send(result);
    
  });
});
// d PARTE B
app.get('/appointments/start_time/:id', (req, res) => {
  const id = req.params.id; 

  connection.query('SELECT * FROM appointments WHERE start_time < ?', [id], function(error, results, fields) { 
    
    if (error) {
      console.error('Erro ao executar consulta:', error);
      res.status(500).send('Erro ao executar consulta.');
    }

    res.send(results);

  });
});

// a-Selecionar apenas uma consulta pelo seu ID (via query) e devolver a mesma na resposta.
app.get("/appointments/:id", async (req, res) => {
  console.log("entrou id");
  const appointmentId = req.params.id;
  connection.query(
    "Select * from appointments Where id =?;",
    [appointmentId],
    (err, result, fields) => {
      if (err) {
        console.error("Erro ao executar consulta:", err);
        res.status(500).send("Erro ao recuperar consultas.");
        return;
      }
      res.send(result);
    }
  );
});
// b-Apagar uma consulta existente (via params) e atualizar a tabela, indicar mensagem de erro se o ID da sessão a apagar não existir ou mensagem de sucesso caso seja apagada.
app.delete("/appointments/:id", async (req, res) => {
  const id = req.params.id;
  connection.query(
    "Delete from appointments Where id =?;",
    [id],
    (err, result, fields) => {
      if (err) {
        console.error("Erro ao executar consulta:", err);
        res.status(500).send("Erro ao recuperar consultas.");
        return;
      }
        res.send(result);
    }
  );
});
// c-Selecionar todas as consultas de uma determinada clínica e devolver essa lista na resposta.
app.get("/appointments/clinic/:id", async (req, res) => {
  const id = req.params.id;
  connection.query(
    "Select * from appointments Where clinic=?;",
    [id],
    (err, result, fields) => {
      if (err) {
        console.error("Erro ao executar consulta:", err);
        res.status(500).send("Erro ao recuperar consultas.");
        return;
      }
      res.send(result);
    }
  );
});
//  d-Adicionar um comentário a uma determinada consulta (mantendo os anteriores) pelo seu ID e atualizar a tabela. Devolver a entrada atualizada na resposta.
app.post("/appointments/:id/coment", async (req, res) => {
  console.log("entrou");
  const id = req.params.id;
  const comentario = req.body.coment;
  connection.query(
    "Select * from appointments Where id =?;",
    [id],
    (err, result, fields) => {
      if (err) {
        console.error("Erro ao executar consulta:", err);
        res.status(500).send("Erro ao recuperar consultas.");
        return;
      }
      const coment = result[0].comment + comentario;
      console.log(result);
      connection.execute(
        "update  appointments set  comment = ?   where id=?;",
        [coment, id],
        (err, result, fields) => {
          if (err) {
            console.error("Erro ao executar consulta:", err);
            res.status(500).send("Erro ao recuperar consultas.");
            return;
          }
          res.send(result);
        }
      );
    }
  );
});

// PARTE A

// a-Listar todas as consultas existentes na tabela e devolver na resposta.

app.get("/appointments", (req, res) => {
  connection.query("select * from appointments", (err, result, fields) => {
    if (err) {
      console.error("Erro ao executar consulta:", err);
      res.status(500).send("Erro ao recuperar consultas.");
      return;
    }
    res.send(result);
  });
});
// b-Adicionar uma nova consulta à base de dados. Deverá ser enviada uma mensagem de sucesso na resposta indicando o ID da consulta adicionada.

app.post("/appointments", async (req, res) => {
  var newAppointment = req.body;
  console.log(newAppointment);
  connection.execute(
    "insert into appointments(clinic, doctor_id, patient_id, room, duration, location, start_time )  values (?, ?, ?, ?, ?, ?, ?)",

    [
      newAppointment.clinic,
      newAppointment.doctor_id,
      newAppointment.patient_id,
      newAppointment.room,
      newAppointment.duration,
      newAppointment.location,
      newAppointment.start_time,
    ],
    (err, result, fields) => {
      if (err) {
        console.error("Erro ao executar consulta:", err);
        res.status(500).send("Erro ao recuperar consultas.");
        return;
      }
      //console.log(err, result, fields);
      res.send(result);
    }
  );
});
// c-Selecionar todos as consultas de um determinado médico e devolver essa lista na resposta.

app.get("/appointments/doctor/:id", async (req, res) => {
  const id = req.params.id;
  connection.query(
    "Select * from appointments Where doctor_id =?;",
    [id],
    (err, result, fields) => {
      if (err) {
        console.error("Erro ao executar consulta:", err);
        res.status(500).send("Erro ao recuperar consultas.");
        return;
      }
      res.send(result);
    }
  );
});
// d-Modificar o horário da consulta, (via query) somando ou subtraindo por exemplo 2h, e atualizar a entrada. Devolver a entrada atualizada na resposta.

app.post("/appointments/:id/start_time/", async (req, res) => {
  const id = req.params.id;
  const hour = req.body.start_time;
  connection.query(
    "Select * from appointments Where id =?;",
    [id],
    (err, result, fields) => {
      if (err) {
        console.error("Erro ao executar consulta:", err);
        res.status(500).send("Erro ao recuperar consultas.");
        return;
      }
      const start = result[0].start + hour;
      console.log(result);
      connection.execute(
        "update  appointments set  start_time = ?   where id=?;",
        [start, id],
        (err, result, fields) => {
          if (err) {
            console.error("Erro ao executar consulta:", err);
            res.status(500).send("Erro ao recuperar consultas.");
            return;
          }
          res.send(result);
        }
      );
    }
  );
});




/////////////////////////////////////////////////////////////////////////

app.get("/appointments/doctor/:id", async (req, res) => {
  const id = req.params.id;
  connection.query(
    "Select * from appointments Where doctor_id =?;",
    [id],
    (err, result, fields) => {
      res.send(result);
    }
  );
});

app.delete("/appointments/doctor/:id", async (req, res) => {
  const id = req.params.id;
  connection.query(
    "Delete from appointments Where doctor_id =?;",
    [id],
    (err, result, fields) => {
      res.send(result);
    }
  );
});

app.post("/appointments", async (req, res) => {
  var newAppointment = req.body;
  console.log(newAppointment);
  connection.execute(
    "insert into appointments(clinic, doctor_id, patient_id, room, duration, location, start_time )  values (?, ?, ?, ?, ?, ?, ?)",

    [
      newAppointment.clinic,
      newAppointment.doctor_id,
      newAppointment.patient_id,
      newAppointment.room,
      newAppointment.duration,
      newAppointment.location,
      newAppointment.start_time,
    ],
    (err, result, fields) => {
      console.log(err, result, fields);
      res.send(result);
    }
  );
});
