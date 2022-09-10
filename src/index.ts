import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import route from './Routes/routes'

dotenv.config()

const app = express()

const { PORT } = process.env

app.use(express.json())
// app.use(cors())


var corsOptions = {
  origin: 'https://blog-new.netlify.app/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// app.get('/', cors(corsOptions), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for only example.com.'})
// })


app.use(route)

app.get('/all', cors(corsOptions), function (req: Request, res: Response) {
  return res.status(200).send({ msg: ` 🍏 Api Running` })
})

app.listen(PORT, () => {
  console.log(` 🍏 Api Running ${PORT}`)
})

export default app
