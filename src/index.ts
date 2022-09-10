import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import route from './Routes/routes'

dotenv.config()

const app = express()

const { PORT } = process.env

app.all('*', function(req, res, next) {
     var origin = req.get('origin'); 
     res.header('Access-Control-Allow-Origin', origin);
     res.header("Access-Control-Allow-Headers", "X-Requested-With");
     res.header('Access-Control-Allow-Headers', 'Content-Type');
     next();
});

app.use(express.json())
app.use(cors())
// app.use(cors(
//   "Access-Control-Allow-Headers": "Content-Type",
//   "Access-Control-Allow-Origin": "https://www.example.com",
//   "Access-Control-Allow-Methods": "OPTIONS,POST,GET"

// ))

app.use(route)

app.get('/', function (req: Request, res: Response) {
  return res.status(200).send({ msg: ` 🍏 Api Running` })
})

app.listen(PORT, () => {
  console.log(` 🍏 Api Running ${PORT}`)
})

export default app
