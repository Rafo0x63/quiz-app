import express from "express"
import { PrismaClient } from '../../generated/prisma/client.js'

const router = express.Router()
const prisma = new PrismaClient()

router.get("/", async (req, res) => { 
    const categories = await prisma.categories.findMany()
    res.json(categories)
})

router.get("/:id", async (req, res) => {
    const { id } = req.params
    const category = await prisma.categories.findUnique({
        where: { id: Number(id) }
    })
    
    res.json(category)
})

export default router
