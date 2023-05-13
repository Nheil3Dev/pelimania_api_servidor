const express = require('express')
const cors = require('cors')
const app = express()

// Middlewares
app.use(cors())

// Routers
const userRouter = require('./routers/usuarios')
app.use('/api/usuarios', userRouter)

const movieRouter = require('./routers/peliculas')
app.use('/api/peliculas', movieRouter)

const commentRouter = require('./routers/comentarios')
app.use('/api/comentarios', commentRouter)

// Routing (Home)
app.get('/', (req, res) => {
  res.send('<div style="font-size: 1.5rem; display: flex; flex-direction: column; align-items: center; margin-top: 50px; min-height: 100%; font-family: sans-serif">' +
            '<h1>API de Pelimania</h1>' +
            '<br>' +
            '<a href="http://localhost/Pelimania" style="color: aquamarine; font-weight: bold">Pelimania</a><div>'
  )
})

// Listener
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`El servidor está escuchando en el puerto ${PORT}...`)
})
