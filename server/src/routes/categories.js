import express from "express"
import { PrismaClient } from '../../generated/prisma/client.js'

const router = express.Router()
const prisma = new PrismaClient()

router.get("/", async (req, res) => { 
    const categories = await prisma.category.findMany()
    res.json(categories)
})

router.get("/:id", async (req, res) => {
    const { id } = req.params
    const category = await prisma.category.findUnique({
        where: { id: Number(id) }
    })

    res.json(category)
})

router.post('/', async (req, res) => {
    const { title } = req.body
    const category = await prisma.category.create({
        data: {
            title: title 
        } 
    })
    
    res.json(category)
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { title } = req.body
    const category = await prisma.category.update({
        where: {
            id: Number(id)
        },
        data: {
            title: title
        }
    })

    res.json(category)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const category = await prisma.category.delete({
        where: {
            id: Number(id)
        }
    })

    res.json(category)
})

export default router
