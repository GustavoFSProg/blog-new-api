import { Router } from 'express'
import cors from 'cors'

import uploadConfig from '../uploadConfig'
import multer from 'multer'
const upload = multer(uploadConfig)

import postController from '../postController'
import { isAuthorized } from '../authorize'
        
const PostsRoute = Router()


var corsOptions = {
  origin: 'https://blog-new.netlify.app/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

PostsRoute.get('/all', cors(corsOptions), postController.getAll),
PostsRoute.get('/search', postController.getSearch)
PostsRoute.post('/register', isAuthorized, upload.single('image'),    postController.registerPost)

 

export default PostsRoute
