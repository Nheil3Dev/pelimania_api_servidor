import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { commentRouter } from './routers/comentarios.js'
import { movieRouter } from './routers/peliculas.js'
import { userRouter } from './routers/usuarios.js'

const app = express()

dotenv.config()

const PORT = process.env.PORT ?? 3001

// Middlewares
app.use(cors())
app.use(express.json())

// Routers
app.use('/api/usuarios', userRouter)
app.use('/api/peliculas', movieRouter)
app.use('/api/comentarios', commentRouter)

// Configura la URL de la API basada en el entorno
const apiURL = process.env.NODE_ENV === 'production' ? process.cwd() + '/api/' : `http://localhost:${PORT}`
const appURL = process.env.NODE_ENV === 'production' ? process.cwd() : `http://localhost:${PORT}`

// Routing (API Home)
app.get('/api', (req, res) => {
  res.send('<div style="font-size: 1.5rem; display: flex; flex-direction: column; align-items: center; margin-top: 50px; min-height: 100%; font-family: sans-serif">' +
            '<h1>API de Pelimania</h1>' +
            '<br>' +
            `<a href=${appURL} style="color: aquamarine; font-weight: bold">Pelimania</a><div>`
  )
})

// Configuración del middleware para servir archivos estáticos
app.use(express.static(process.cwd() + '/dist/'))

app.get('*', (req, res) => {
  res.sendFile(process.cwd() + '/dist/index.html', {
    apiURL: JSON.stringify(apiURL)
  })
})

// Listener
app.listen(PORT, () => {
  console.log(`El servidor está escuchando en: http://localhost:${PORT}`)
})
