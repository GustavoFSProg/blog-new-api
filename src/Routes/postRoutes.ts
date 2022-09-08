import { Router } from 'express'
import cors from 'cors'

import uploadConfig from '../uploadConfig'
import multer from 'multer'
const upload = multer(uploadConfig)

import postController from '../postController'
import { isAuthorized } from '../authorize'

const PostsRoute = Router()

PostsRoute.get('/all', postController.getAll),
PostsRoute.get('/search', postController.getSearch)
PostsRoute.post('/register', cors(), upload.single('image'), isAuthorized,   postController.registerPost)

// upload.single('image'),

//  

export default PostsRoute
