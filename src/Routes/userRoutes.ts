import { Router } from 'express'
import { isAuthorized } from '../authorize'
import cors from 'cors'

// const Postproducts = {
//   origin: true,
//   methods: ["GET"],
//   credentials: true,
//   maxAge: 3600
// };

import userController from '../userController'

const UsersRoute = Router()

UsersRoute.get('/all-user', isAuthorized, userController.getAll),
  // UsersRoute.post('/verify-token', userController.Token)
  UsersRoute.post('/register-user', userController.createUser)
UsersRoute.post('/login',   userController.Login)

export default UsersRoute
