import { Router } from 'express'
import { isAuthorized } from '../authorize'
import cors from 'cors'

// var corsOptions = {
//   origin: 'https://blog-new.netlify.app/',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
// import cors from 'cors'

import userController from '../userController'

const UsersRoute = Router()

UsersRoute.get('/all-user', isAuthorized, userController.getAll),
  // UsersRoute.post('/verify-token', userController.Token)
  UsersRoute.post('/register-user', userController.createUser)
UsersRoute.post('/login',  userController.Login)

export default UsersRoute
