const connection = require('../database/mysql')

function agregarPelicula (req, res) {
  const id = req.body.pelicula.id
  const titulo = req.body.pelicula.titulo
  const anho = req.body.pelicula.anho
  const foto = req.body.pelicula.foto
  const sql = 'INSERT INTO pelicula (id, titulo, año, foto) VALUES (?, ?, ?, ?)'
  connection.query(sql, [id, titulo, anho, foto], (error, result, fields) => {
    try {
      if (error) throw error
      res.json({ anadida: true })
    } catch (error) {
      res.json({ anadida: false })
    }
  })
}

function seguirPelicula (req, res) {
  const usuario = req.body.usuario
  const idPelicula = req.body.idPelicula
  const sql = 'INSERT INTO usuario_pelicula (usuario, idPelicula) VALUES (?, ?)'
  connection.query(sql, [usuario, idPelicula], (error, result, fields) => {
    try {
      if (error) throw error
      res.json({ siguiendo: true })
    } catch (error) {
      res.json({ siguiendo: false })
    }
  })
}

function dejarSeguirPelicula (req, res) {
  const usuario = req.body.usuario
  const idPelicula = req.body.idPelicula
  const sql = 'DELETE FROM usuario_pelicula WHERE usuario = ? && idPelicula = ?'
  connection.query(sql, [usuario, idPelicula], (error, result, fields) => {
    try {
      if (error) throw error
      res.json({ borrada: true })
    } catch (error) {
      res.json({ borrada: false })
    }
  })
}

function peliculasUsuario (req, res) {
  const usuario = req.params.usuario
  const sql = 'SELECT p.id, p.titulo, p.año as anho, p.foto FROM pelicula AS p INNER JOIN usuario_pelicula AS u ON p.id = u.idPelicula WHERE u.usuario = ?'
  connection.query(sql, usuario, (error, result, fields) => {
    try {
      if (error) throw error
      res.json(result)
    } catch (error) {
      console.log('Sin peliculas')
      res.json([])
    }
  })
}
// Creo que está arreglado :)
function comprobarPelicula (req, res) {
  const usuario = req.params.usuario
  const idPelicula = req.params.idPelicula
  const sql = 'SELECT * FROM usuario_pelicula WHERE usuario = ? && idPelicula = ?'
  connection.query(sql, [usuario, idPelicula], (error, result, fields) => {
    try {
      if (error) throw error
      if (result.length > 0) {
        res.json({ siguiendo: true })
      } else {
        res.json({ siguiendo: false })
      }
    } catch (error) {
      res.json({ siguiendo: false })
    }
  })
}

function comprobarPeliculaBase (req, res) {
  const id = req.params.id
  const sql = 'SELECT * FROM pelicula WHERE id = ?'
  connection.query(sql, id, (error, result, fields) => {
    try {
      if (error) throw error
      if (result.length === 1) {
        res.json({ base: true })
      } else {
        res.json({ base: false })
      }
    } catch (error) {
      console.log(error)
    }
  })
}

module.exports = { agregarPelicula, seguirPelicula, dejarSeguirPelicula, peliculasUsuario, comprobarPelicula, comprobarPeliculaBase }
