import { Router } from 'express'
import { agregarUsuario, borrarUsuario, comprobarUsuario, todosUsuarios } from '../services/usuario.js'

export const userRouter = Router()

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
