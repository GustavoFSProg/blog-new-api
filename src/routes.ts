import { Router } from 'express'

import uploadConfig from './uploadConfig'
import multer from 'multer'
const upload = multer(uploadConfig)

import postController from './postController'


const route = Router()

route.get('/all', postController.getAll),
route.get('/search', postController.getSearch),
route.post('/register', upload.single('image'), postController.registerPost)

export default route
