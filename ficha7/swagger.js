const swaggerAutogen = require('swagger-autogen')()

const outputfile = './swagger_output.json'
const endpointsFiles = ['./app.js']

swaggerAutogen(outputfile, endpointsFiles)