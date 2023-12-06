import { createConnection } from 'mysql'

const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pelimania'
})

connection.connect()

export default connection
