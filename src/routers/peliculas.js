import { Router } from 'express'
import { agregarPelicula, comprobarPelicula, comprobarPeliculaBase, dejarSeguirPelicula, peliculasUsuario, seguirPelicula } from '../services/pelicula.js'

export const movieRouter = Router()

movieRouter.post('/anadir', (req, res) => {
  agregarPelicula(req, res)
})

movieRouter.post('/seguir', (req, res) => {
  seguirPelicula(req, res)
})

movieRouter.delete('/dejarSeguir', (req, res) => {
  dejarSeguirPelicula(req, res)
})

movieRouter.get('/usuario/:usuario', (req, res) => {
  peliculasUsuario(req, res)
})

movieRouter.get('/comprobar/:usuario/:idPelicula', (req, res) => {
  comprobarPelicula(req, res)
})

movieRouter.get('/comprobarBase/:id', (req, res) => {
  comprobarPeliculaBase(req, res)
})
