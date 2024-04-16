const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.use(express.json());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

fs.openSync("./log.txt" , "a+");

app.get('/', (req, res) => {
    const body = 'hello world';
    res.writeHead(200, {
            'Content-length': Buffer.byteLength(body),
            'Content-Type': 'text/plain'});
    res.end(body);
    })

app.get('/html', (req, res) => {
    const body = '<html> <body> <h1>My First Heading</h1> <p>My first paragraph. </p> </body> </html>';
    res.writeHead(200, {
        'Content-length': Buffer.byteLength(body),
        'Content-Type': 'text/html'});

    res.end(body);
    })

app.get('/hello.html', (req, res) => {
    const body = fs.readFileSync("hello.html", "utf-8");
    res.writeHead(200, {
            'Content-length': Buffer.byteLength(body),
            'Content-Type': 'text/html'});
    res.end(body);
    })
app.get('/date', (req, res) => {
    const body = fs.readFileSync("hello.html", "utf-8");
    var date = new Date()
    body = body.replace("date_placeholder", date.toLocaleDateString())
    res.writeHead(200, {
            'Content-length': Buffer.byteLength(body),
            'Content-Type': 'text/html'});
    res.end(body);
    })