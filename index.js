const { request, response, json } = require('express')
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(express.static('build'))
app.use(morgan( (tokens, req, res)=> {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms',
      JSON.stringify(req.body)
    ].join(' ')
  }))

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

const personTotal = persons.length;
const date = new Date()

app.get('/',(request,response)=> {
    response.send('<h1>hello person</h1>')
})

app.get('/api/persons', (request, response)=> {
    response.json(persons)
})

app.get('/api/info', (request,response)=> {
    response.send(`<p>Phonebook has info for ${personTotal} people </p><p>${date}</p>`)
})

app.get('/api/persons/:id', (request, response)=> {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    response.json(person)
})

app.post('/api/persons', (request, response)=> {
    const body = request.body
    const filterPerson = persons.filter(person => person.name === body.name)
    if(!body.name){
        return response.status(400).json({
            error : 'content missing'
        })
    }
    const person = {
        id : generetId(),
        name : body.name,
        number : body.number
    }

    if(filterPerson.length !== 0){
        return response.json({ error: 'name must be unique' })
    }
    if(body.number === ""){
        return response.json({ error: 'number moust not empety' })
    }
    persons = persons.concat(person)
    response.json(person)
    
})


app.delete('/api/persons/:id', (request, response)=>{
    const id = Number(request.params.id)
    const person = persons.filter(person => person.id !== id)

    response.status(204).end()
})


const PORT = process.env.PORT || 3001
app.listen(PORT,()=> console.log(`run on port ${PORT}`))