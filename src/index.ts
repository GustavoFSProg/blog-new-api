import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import route from './Routes/routes'

dotenv.config()

const app = express()

const { PORT } = process.env

// var corsOptions = {
//   origin: ['https://blog-new.netlify.app/', 'http://qqqwwwexa:5000/'],
//   // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   // preflightContinue: false,
//   optionsSuccessStatus: 204,
// }

app.use(express.json())
// app.use(cors({
//   // origin: 'https://blog-new.netlify.app/',
//   origin: ['http://localhost:5000/'],
//   // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   // preflightContinue: false,
//   optionsSuccessStatus: 204,
// }))
app.use(cors())
app.use(route)

app.get('/', function (req: Request, res: Response) {
  return res.status(200).send({ msg: ` 🍏 Api Running` })
})

app.listen(PORT, () => {
  console.log(` 🍏 Api Running ${PORT}`)
})

export default app
