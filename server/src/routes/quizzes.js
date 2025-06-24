import express from "express"
import { PrismaClient } from '../../generated/prisma/client.js'

const router = express.Router()
const prisma = new PrismaClient()

router.get("/", async (req, res) => { 
    const quizzes = await prisma.quizzes.findMany()
    res.json(quizzes)
})

router.get("/:category_title", async (req, res) => {
    const { category_title } = req.params
    
    const category = await prisma.categories.findFirst({
        where: { title: category_title}
    })

    const quizzes = await prisma.quizzes.findMany({
        where: { category_id: category.id }
    })

    res.json(quizzes)
})

export default router
