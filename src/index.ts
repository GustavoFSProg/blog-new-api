import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import route from './Routes/routes'

dotenv.config()

const app = express()

const { PORT } = process.env


app.use(cors())
app.use(express.json())
app.use(route)

app.get('/', function (req: Request, res: Response) {
  return res.status(200).send({ msg: ` 🍏 Api Running::` })
})

app.listen(PORT, () => {
  console.log(` 🍏 Api Running ${PORT}`)
})

export default app
