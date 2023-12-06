import { db } from '../database/sqlite.js'

export async function comprobarUsuario (req, res) {
  try {
    const { usuario, contrasena } = req.params

    const user = await db.execute({
      sql: 'SELECT usuario, contraseña AS password FROM usuario WHERE usuario = ?',
      args: [usuario]
    })

    if (user.rows.length === 1) {
      const password = user.rows[0].password
      if (password === contrasena) {
        res.json({ registrado: true, acceso: true })
      } else {
        res.json({ registrado: true, acceso: false, error: 'Contraseña incorrecta' })
      }
    } else {
      res.json({ resgistrado: false, acceso: false, error: 'Usuario no registrado' })
    }
  } catch (e) {
    console.error(e)
  }
}

export async function todosUsuarios (res) {
  try {
    const users = await db.execute('SELECT * FROM usuario WHERE usuario != "admin" ORDER BY usuario ASC')

    return res.json(users.rows)
  } catch (e) {
    console.error(e)
  }
}

export async function agregarUsuario (req, res) {
  try {
    const { usuario, contrasena } = req.body

    const isCreated = await db.execute({
      sql: 'INSERT INTO usuario (usuario, contraseña) VALUES (?, ?)',
      args: [usuario, contrasena]
    })

    if (isCreated.rowsAffected === 1) return res.json({ registrado: true })

    return res.json({ registrado: false })
  } catch (e) {
    console.error(e)
  }
}

export async function borrarUsuario (req, res) {
  try {
    const { usuario } = req.body

    const isDeleted = await db.execute({
      sql: 'DELETE FROM usuario WHERE usuario = ?',
      args: [usuario]
    })

    if (isDeleted.rowsAffected === 1) return res.json({ borrado: true })

    return res.json({ borrado: false })
  } catch (e) {
    console.error(e)
  }
}
