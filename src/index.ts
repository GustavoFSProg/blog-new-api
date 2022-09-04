import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import route from './Routes/routes'

dotenv.config()

const app = express()

const { PORT } = process.env

app.use(express.json())

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "https://blog-new.netlify.app/");
	//Quais são os métodos que a conexão pode realizar na API
    app.use(cors());
    next();
});

app.use(route)

app.get('/', function (req: Request, res: Response) {
  return res.status(200).send({ msg: ` 🍏 Api Running` })
})


app.listen(PORT, () => {
  console.log(` 🍏 Api Running ${PORT}`)
})

export default app
