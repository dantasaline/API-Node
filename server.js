import express from 'express'

const app = express()
app.use(express.json())
const usuarios = []

//criar as rotas
app.get('/cadastro',(req,res)=>{
    res.status(200).json(usuarios)
})

app.post('/cadastro',(req,res)=>{
    //console.log(req.body)
    usuarios.push(req.body)
    res.status(201) .json(req.body)
})

//configurar porta servidor 
app.listen(3000, ()=>(console.log('SERVIDOR RODANDO')))