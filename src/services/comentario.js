import { db } from '../database/sqlite.js'

export async function anadirComentario (req, res) {
  try {
    const { comentario, spoiler, estrellas, usuario, idPelicula } = req.body

    const isCreated = await db.execute({
      sql: 'INSERT INTO comentario (comentario, spoiler, estrellas, usuario, idPelicula) VALUES (?, ?, ?, ?, ?)',
      args: [comentario, spoiler, estrellas, usuario, idPelicula]
    })

    if (isCreated.affectedRows === 1) return res.json({ anadido: true })

    return res.json({ anadido: false })
  } catch (e) {
    console.error(e)
  }
}

export async function obtenerComentariosPelicula (req, res) {
  try {
    const { idPelicula } = req.params

    const comments = await db.execute({
      sql: 'SELECT * FROM comentario WHERE idPelicula = ? ORDER BY fecha DESC',
      args: [idPelicula]
    })

    return res.json(comments.rows)
  } catch (e) {
    console.error(e)
  }
}

export async function obtenerTodos (req, res) {
  try {
    const comments = await db.execute(`
      SELECT 
        c.usuario, c.idPelicula, c.comentario, c.estrellas, c.fecha, c.spoiler, p.id, p.titulo 
      FROM 
        comentario AS c 
      INNER JOIN 
        pelicula AS p ON c.idPelicula = p.id 
      ORDER BY 
        c.fecha DESC
    `)

    return res.json(comments.rows)
  } catch (e) {
    console.error(e)
  }
}

export async function borrarComentario (req, res) {
  try {
    const { usuario, idPelicula, fecha } = req.body

    const isDeleted = await db.execute({
      sql: 'DELETE FROM comentario WHERE usuario = ? AND idPelicula = ? AND fecha = ?',
      args: [usuario, idPelicula, fecha]
    })

    if (isDeleted.affectedRows === 1) return res.json({ borrado: true })

    return res.json({ borrado: false })
  } catch (e) {
    console.error(e)
  }
}

export async function obtenerComentariosUsuario (req, res) {
  try {
    const { usuario } = req.params

    const comments = await db.execute({
      sql: `
        SELECT
          c.usuario, c.idPelicula, c.comentario, c.estrellas, c.fecha, c.spoiler, p.id, p.titulo 
        FROM 
          comentario AS c 
        INNER JOIN 
          pelicula AS p ON c.idPelicula = p.id 
        WHERE 
          c.usuario = ? 
        ORDER BY 
          c.fecha DESC
      `,
      args: [usuario]
    })

    return res.json(comments.rows)
  } catch (e) {
    console.error(e)
  }
}
