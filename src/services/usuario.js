const connection = require('../database/mysql')

function comprobarUsuario (req, res) {
  const usuario = req.params.usuario
  const contrasena = req.params.contrasena
  connection.query('SELECT usuario, contraseña AS password FROM usuario WHERE usuario = ?', usuario, (error, results, fields) => {
    if (error) throw error
    if (results.length === 1) {
      const password = results[0].password
      if (password === contrasena) {
        res.json({ registrado: true, acceso: true })
      } else {
        res.json({ registrado: true, acceso: false, error: 'Contraseña incorrecta' })
      }
    } else {
      res.json({ resgistrado: false, acceso: false, error: 'Usuario no registrado' })
    }
  })
}

function todosUsuarios (res) {
  const sql = 'SELECT * FROM usuario WHERE usuario != "admin" ORDER BY usuario ASC'
  connection.query(sql, (error, result, fields) => {
    if (error) throw error
    res.json(result)
  })
}

function agregarUsuario (req, res) {
  const usuario = req.body.usuario
  const contrasena = req.body.contrasena
  const sql = 'INSERT INTO usuario (usuario, contraseña) VALUES (?, ?)'
  connection.query(sql, [usuario, contrasena], (error, result, fields) => {
    try {
      if (error) throw error
      res.json({ registrado: true })
    } catch (error) {
      res.json({ registrado: false })
    }
  })
}

function borrarUsuario (req, res) {
  const usuario = req.body.usuario
  const sql = 'DELETE FROM usuario WHERE usuario = ?'
  connection.query(sql, usuario, (error, result, fields) => {
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

module.exports = { todosUsuarios, comprobarUsuario, agregarUsuario, borrarUsuario }
