const swaggerAutogen = require('swagger-autogen')()

const outputfile = './swagger_output.json'
const endpointsFiles = ['./server.js']

swaggerAutogen(outputfile, endpointsFiles)