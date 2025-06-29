import express from 'express'
import { PrismaClient } from '../../generated/prisma/client.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { env } from 'process'

const router = express.Router()
const prisma = new PrismaClient()

router.post('/register', async (req, res) => {
    const { email, password, first_name, last_name } = req.body
    if (!email || !password || !first_name || !last_name) {
      return res.status(400).json({ error: 'Email, password, and name are required' })
    }

    try {
      const existingUser = await prisma.user.findUnique({ where: { email } })
      if (existingUser) {
        return res.status(409).json({ error: 'User with this email already exists' })
      }

      const hashedPassword = await bcrypt.hash(password, 10)

      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          first_name,
          last_name
        },
      })

      res.status(201).json({ message: 'User registered successfully', userId: user.id })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal server error' })
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' })
    }

    try {
      const user = await prisma.user.findUnique({ where: { email } })

      if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' })
      }

      const passwordValid = await bcrypt.compare(password, user.password)

      if (!passwordValid) {
        return res.status(401).json({ error: 'Invalid email or password' })
      }
 
      if (user && passwordValid) {
          const token = jwt.sign( {userId: user.id, isAdmin: user.is_admin },  process.env.JWT_SECRET)
      }

      res.json({ message: 'Login successful',
        token,
        user: { 
          firstName: user.first_name, email: user.email, isAdmin: user.is_admin 
        }
      })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal server error' })
    }
})


export default router