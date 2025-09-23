import express from 'express'
import cors from "cors"

import pkg from '@prisma/client'
const { PrismaClient } = pkg
const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())

app.get('/cadastro', async (req, res) => {
  const lista_usuarios = await prisma.usuario.findMany()
  res.status(200).json(lista_usuarios)
})

app.post('/cadastro', async (req, res) => {
  const usuario = await prisma.usuario.create({
    data: {
      nome: req.body.nome,
      idade: req.body.idade,
      email: req.body.email
    }
  })
  res.status(201).json(usuario)
})

app.put('/cadastro/:id', async (req,res) => {
  const usuario = await prisma.usuario.update({
    where: { id: req.params.id },
    data: {
      nome: req.body.nome,
      idade: req.body.idade,
      email: req.body.email
    }
  })
  res.status(200).json(usuario)
})

app.delete('/cadastro/:id', async (req, res) => {
  await prisma.usuario.delete({
    where: { id: req.params.id }
  })
  res.status(200).json({ message: "Usuário Deletado" })
})

app.listen(3000, () => console.log('SERVIDOR RODANDO'))
