const connection = require('../database/mysql')

function anadirComentario (req, res) {
  const comentario = req.body.comentario
  const spoiler = req.body.spoiler
  const estrellas = req.body.estrellas
  const usuario = req.body.usuario
  const idPelicula = req.body.idPelicula
  const sql = 'INSERT INTO comentario (comentario, spoiler, estrellas, usuario, idPelicula) VALUES (?, ?, ?, ?, ?)'
  connection.query(sql, [comentario, spoiler, estrellas, usuario, idPelicula], (error, result, fields) => {
    try {
      if (error) throw error
      res.json({ anadido: true })
    } catch (error) {
      res.json({ anadido: false })
    }
  })
}

function obtenerComentariosPelicula (req, res) {
  const idPelicula = req.params.idPelicula
  const sql = 'SELECT * FROM comentario WHERE idPelicula = ? ORDER BY fecha DESC'
  connection.query(sql, idPelicula, (error, result, fields) => {
    try {
      if (error) throw error
      res.json(result)
    } catch (error) {
      res.json([])
    }
  })
}

function obtenerTodos (req, res) {
  const sql = 'SELECT c.usuario, c.idPelicula, c.comentario, c.estrellas, c.fecha, c.spoiler, p.id, p.titulo FROM comentario AS c INNER JOIN pelicula AS p ON c.idPelicula = p.id ORDER BY c.fecha DESC'
  connection.query(sql, (error, result, fields) => {
    try {
      if (error) throw error
      res.json(result)
    } catch (error) {
      res.json([])
    }
  })
}

function borrarComentario (req, res) {
  const usuario = req.body.usuario
  const idPelicula = req.body.idPelicula
  const fecha = req.body.fecha
  const sql = 'DELETE FROM comentario WHERE usuario = ? && idPelicula = ? && fecha = ?'
  connection.query(sql, [usuario, idPelicula, fecha], (error, result, fields) => {
    try {
      if (error) throw error
      if (result.affectedRows === 1) {
        res.json({ borrado: true })
      } else {
        res.json({ borrado: false })
      }
    } catch (error) {
      res.json({ borrado: false })
    }
  })
}

function obtenerComentariosUsuario (req, res) {
  const usuario = req.params.usuario
  const sql = 'SELECT c.usuario, c.idPelicula, c.comentario, c.estrellas, c.fecha, c.spoiler, p.id, p.titulo FROM comentario AS c INNER JOIN pelicula AS p ON c.idPelicula = p.id WHERE c.usuario = ? ORDER BY c.fecha DESC'
  connection.query(sql, usuario, (error, result, fields) => {
    try {
      if (error) throw error
      res.json(result)
    } catch (error) {
      console.log('Sin comentarios')
      res.json([])
    }
  })
}

module.exports = { anadirComentario, obtenerComentariosPelicula, obtenerTodos, borrarComentario, obtenerComentariosUsuario }
