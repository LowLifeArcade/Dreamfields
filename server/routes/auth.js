import express from 'express'

const router = express.Router()

// middlewares
import {requireSignin}from '../middlewares'

// controllers
import  {register, login, logout, currentUser} from '../controllers/auth'

router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)
router.get('/current-user', requireSignin, currentUser)

module.exports = router 
