import { Router } from 'express'
import cors from 'cors'

import uploadConfig from '../uploadConfig'
import multer from 'multer'
const upload = multer(uploadConfig)

import postController from '../postController'
import { isAuthorized } from '../authorize'
        
const PostsRoute = Router()

const Postproducts = {
  origin: true,
  methods: ["POST"],
  credentials: true,
  maxAge: 3600
};

// var corsOptions = {
//   // allowedHeaders: ['Content-Type', 'Authorization'], 
//   // allowedHeaders:['https://blog-new.netlify.app/'], 
  
 
//   // origin: '  ',
 
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

PostsRoute.get('/all',   postController.getAll),
PostsRoute.get('/search', postController.getSearch)
PostsRoute.post('/register',  cors(Postproducts), isAuthorized,  upload.single('image'),    postController.registerPost)

 

export default PostsRoute
