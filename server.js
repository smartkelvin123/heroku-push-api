const { request } = require('express')
const express = require('express')

const app = express()
const cors = require('cors')
const PORT = 3000
app.use(cors())



const smokers =  {
    'kingsley' : {
        'birthname': 'john bin',
    'birthplace' : 'london, England',
    'age' : '29'
    },
    'collins' : {
        'birthname': 'chancelor bennett',
    'birthplace' : 'LOS ANGELES, California',
    'age' : '29'
    },
    'unknown': {
        'birthname': 'unknown',
    'birthplace' : 'unknown',
    'age' : '0'
  }
}

app.get('/',(request,response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response) => {
    const smokersName = request.params.name.toLowerCase()
    if(smokers[smokersName]){
     response.json(smokers[smokersName])
    }
     else{
         response.json(smokers['unknown'])
     }
 })

 app.listen( PORT ,() =>{
    console.log(`the server is now running on ${PORT} better go catch it`)
})