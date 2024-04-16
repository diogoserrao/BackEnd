const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
//utilização middleware
app.use(express.json());

var data = fs.readFileSync("person.json")

var dataobj = JSON.parse(data);

app.get('/user/:id', (request, response) => {
  //var id = request.params.id
  //const result = dataobj.data.filter((user) = user.id = id)
  //res.send(id)
  var id = request.params.id
  const result = dataobj.data.filter((user) => user.id == id);
  if(result.length == 0)
    response.send("ID: " + id + " not found")
  else 
  response.send(result[0]);
});

app.post('/users', (request, response) => {
  var newPerson = request.body;
  let lastElement = dataobj.data[dataobj.data.length - 1];
  const id = lastElement.id + 1
  newPerson.id = id
  dataobj.data.push(newPerson);
  console.log(dataobj)
  fs.writeFileSync('person.json', JSON.stringify(dataobj,null,2));
  response.send(newPerson);
});

app.delete('/users/:id', (request, response) => {
  var id = request.params.id
  const result = dataobj.data.filter((user) => user.id != id);
  dataobj.data = result
  fs.writeFileSync('person.json', JSON.stringify(dataobj,null,2));
  response.send(result)
});

app.put('/users/:id', (request, response) =>{
  var id = request.params.id;
  var details = request.body;

  var index = -1
  for (let i = 0; i < dataobj.data.length; i++){
    if(id == dataobj.data[i].id)
    index = i;
  }
  if(index != -1){
    details.id = id;
    dataobj.data[index] = details;
  }
  else{
    response.send("Id: " + id + " not found ")
  }
  dataobj.data[0].firstname = details.firstname;

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// 3 formas de enviar dados no pedido
//1 parametros de rota
//2 parametros de query
//3 body
