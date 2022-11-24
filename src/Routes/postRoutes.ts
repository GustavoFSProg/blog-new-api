import { Router } from 'express'
import { Request, Response } from 'express'

import uploadConfig from '../uploadConfig'
import multer from 'multer'
const upload = multer(uploadConfig)

import postController from '../controllers/postController'
import { isAuthorized } from '../utils/authorize'

const PostsRoute = Router()

// (req: Request, res: Response) => {
//   res.setHeader('Access-Control-Allow-Origin', '*'),
//      res.send("Lista de Posts")
// }

PostsRoute.get('/all',  postController.getAll),
PostsRoute.get('/total',  postController.getAll),
  PostsRoute.get('/search', postController.getSearch),
PostsRoute.post('/register', upload.single('image'),  postController.registerPost),

PostsRoute.put('/likes/:id', postController.updateLikes)
PostsRoute.post('/views/:id', postController.updateViews)
PostsRoute.get('/get-likes/:id', postController.viewLikes)
PostsRoute.get('/profile/:id', postController.getOnePost)
PostsRoute.put('/update/:id', postController.updatePost)
PostsRoute.put('/delete/:id', postController.deletePost)
PostsRoute.get('/total', postController.getTotal)



export default PostsRoute
