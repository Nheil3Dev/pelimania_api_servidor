const express = require('express')
const { anadirComentario, obtenerComentariosPelicula, obtenerTodos, borrarComentario, obtenerComentariosUsuario } = require('../services/comentario')

const commentRouter = express.Router()

commentRouter.use(express.json())

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

module.exports = commentRouter
