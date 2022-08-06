import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import route from './routes'

dotenv.config()

const app = express()

const { PORT } = process.env

app.use(express.json())


// **** O codigo abiaxo setou o cors ****d

app.use(route)
app.use(cors())


app.get('/', function (req: Request, res: Response) {
  return res.status(200).send({ msg: ` 🍏 Api Running` })
})

app.listen(PORT, () => {
  console.log(` 🍏 Api Running`)
})

export default app
