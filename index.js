require('dotenv').config()
// console.log(process.env)
const express = require('express')
const cors = require('cors')

const server = express()
const PORT = process.env.port || 9000;
server.use(express.json())
server.use(cors())

server.get('/api' , (req,res)=>{
    res.json({
        nessage: 'it is working'
    })
 })

server.use('*' , (req,res)=>{
    res.send(`<h1>hello world!</h1>`)
})

server.listen( PORT ,  ()=>{
    console.log('server is runing')
})
console.log(process.env.PORT, process.env.NODE_ENV)  