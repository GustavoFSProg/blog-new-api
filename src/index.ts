import express, { Response, Request } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './Routes/routes'

dotenv.config()

const { PORT } = process.env

const app = express()

// const options: cors.CorsOptions = {
//   methods: 'GET,POST,PUT,DELETE',
//   origin: 'https://blog-new.netlify.app'
// }

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
  console.log(` 🎅 Api Running: ${PORT}`)
})

export default app
