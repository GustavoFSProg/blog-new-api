import { Router } from 'express'


import userController from '../userController'


const UsersRoute = Router()

UsersRoute.get('/all-user', userController.getAll),
UsersRoute.post('/register-user', userController.createUser)
UsersRoute.post('/login', userController.Login)

export default UsersRoute
