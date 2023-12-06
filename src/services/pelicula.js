import { db } from '../database/sqlite.js'

export async function agregarPelicula (req, res) {
  try {
    const { id, titulo, anho, foto } = req.body.pelicula

    const isCreated = await db.execute({
      sql: 'INSERT INTO pelicula (id, titulo, año, foto) VALUES (?, ?, ?, ?)',
      args: [id, titulo, anho, foto]
    })

    if (isCreated.rowsAffected === 1) return res.json({ anadida: true })

    return res.json({ anadida: false })
  } catch (e) {
    console.error(e)
  }
}

export async function seguirPelicula (req, res) {
  try {
    const { usuario, idPelicula } = req.body

    const isCreated = await db.execute({
      sql: 'INSERT INTO usuario_pelicula (usuario, idPelicula) VALUES (?, ?)',
      args: [usuario, idPelicula]
    })

    if (isCreated.rowsAffected === 1) return res.json({ siguiendo: true })

    return res.json({ siguiendo: false })
  } catch (e) {
    console.error(e)
  }
}

export async function dejarSeguirPelicula (req, res) {
  try {
    const { usuario, idPelicula } = req.body

    const isDeleted = await db.execute({
      sql: 'DELETE FROM usuario_pelicula WHERE usuario = ? AND idPelicula = ?',
      args: [usuario, idPelicula]
    })

    if (isDeleted.rowsAffected === 1) return res.json({ borrada: true })

    return res.json({ borrada: false })
  } catch (e) {
    console.error(e)
  }
}

export async function peliculasUsuario (req, res) {
  try {
    const { usuario } = req.params

    const movies = await db.execute({
      sql: `
        SELECT 
          p.id, p.titulo, p.año as anho, p.foto 
        FROM 
          pelicula AS p 
        INNER JOIN 
          usuario_pelicula AS u ON p.id = u.idPelicula 
        WHERE 
          u.usuario = ?
      `,
      args: [usuario]
    })

    return res.json(movies.rows)
  } catch (e) {
    console.error(e)
  }
}
// Creo que está arreglado :)
export async function comprobarPelicula (req, res) {
  try {
    const { usuario, idPelicula } = req.params

    const movie = await db.execute({
      sql: 'SELECT * FROM usuario_pelicula WHERE usuario = ? AND idPelicula = ?',
      args: [usuario, idPelicula]
    })

    if (movie.rows.length === 1) return res.json({ siguiendo: true })

    return res.json({ siguiendo: false })
  } catch (e) {
    console.error(e)
  }
}

export async function comprobarPeliculaBase (req, res) {
  try {
    const { id } = req.params

    const movie = await db.execute({
      sql: 'SELECT * FROM pelicula WHERE id = ?',
      args: [id]
    })

    if (movie.rows.length === 1) return res.json({ base: true })

    return res.json({ base: false })
  } catch (e) {
    console.error(e)
  }
}
