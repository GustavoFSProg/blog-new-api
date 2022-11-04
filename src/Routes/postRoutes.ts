import { Router } from 'express'
import cors from 'cors'

import uploadConfig from '../uploadConfig'
import multer from 'multer'
const upload = multer(uploadConfig)

import postController from '../controllers/postController'
import { isAuthorized } from '../utils/authorize'

const PostsRoute = Router()

const Postproducts = {
  origin: true,
  methods: ['POST'],
  credentials: true,
  maxAge: 3600,
}

var corsOptions = {
  origin: ['https://blog-new.netlify.app/'],
  // origin: ['http://lodescalhost:5173/'],
  // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  // preflightContinue: false,
  optionsSuccessStatus: 204,
}

// var corsOptions = {
//   // allowedHeaders: ['Content-Type', 'Authorization'],
//   // allowedHeaders:['https://blog-new.netlify.app/'],

//   // origin: '  ',

//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
// cors(corsOptions), 

// PostsRoute.get('/all', cors(corsOptions), postController.getAll),
PostsRoute.get('/all', postController.getAll),
PostsRoute.get('/total', postController.getAll),
  PostsRoute.get('/search', postController.getSearch),
PostsRoute.post('/register', isAuthorized, upload.single('image'), postController.registerPost),

PostsRoute.put('/likes/:id', postController.updateLikes)
PostsRoute.post('/views/:id', postController.updateViews)
PostsRoute.get('/get-likes/:id', postController.viewLikes)
PostsRoute.get('/profile/:id', postController.getOnePost)
PostsRoute.put('/update/:id', postController.updatePost)
PostsRoute.put('/delete/:id', postController.deletePost)
PostsRoute.get('/total', postController.getTotal)



export default PostsRoute
