import { Router } from 'express'
import { anadirComentario, borrarComentario, obtenerComentariosPelicula, obtenerComentariosUsuario, obtenerTodos } from '../services/comentario.js'

export const commentRouter = Router()

commentRouter.post('/anadir', (req, res) => {
  anadirComentario(req, res)
})

commentRouter.get('/pelicula/:idPelicula', (req, res) => {
  obtenerComentariosPelicula(req, res)
})

commentRouter.get('/todos', (req, res) => {
  obtenerTodos(req, res)
})

commentRouter.delete('/borrar', (req, res) => {
  borrarComentario(req, res)
})

commentRouter.get('/usuario/:usuario', (req, res) => {
  obtenerComentariosUsuario(req, res)
})
