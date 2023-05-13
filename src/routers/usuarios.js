const express = require('express')
const { todosUsuarios, comprobarUsuario, agregarUsuario, borrarUsuario } = require('../services/usuario')
const userRouter = express.Router()

userRouter.use(express.json())

userRouter.get('/todos', (req, res) => {
  todosUsuarios(res)
})

userRouter.get('/comprobar/:usuario/:contrasena', (req, res) => {
  comprobarUsuario(req, res)
})

userRouter.post('/anadir', (req, res) => {
  agregarUsuario(req, res)
})

userRouter.delete('/borrar', (req, res) => {
  borrarUsuario(req, res)
})

module.exports = userRouter
