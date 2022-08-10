import { Router } from 'express'
import { isAuthorized } from '../authorize'


import userController from '../userController'


const UsersRoute = Router()

UsersRoute.get('/all-user',isAuthorized, userController.getAll),
UsersRoute.post('/register-user', userController.createUser)
UsersRoute.post('/login', userController.Login)

export default UsersRoute
