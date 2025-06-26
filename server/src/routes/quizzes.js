import express from "express"
import { PrismaClient } from '../../generated/prisma/client.js'

const router = express.Router()
const prisma = new PrismaClient()

router.get("/", async (req, res) => { 
    const quizzes = await prisma.quiz.findMany({
        include: {
            category: {
                select: { title: true }
            }
        }
    })
    res.json(quizzes)
})

router.get("/:category_title", async (req, res) => {
    const { category_title } = req.params
    
    const category = await prisma.category.findFirst({
        where: { title: category_title}
    })

    const quizzes = await prisma.quiz.findMany({
        where: { category_id: category.id }
    })

    res.json(quizzes)
})

router.post("/", async (req, res) => {
    const { title, description, category_id } = req.body

    const quiz = await prisma.quiz.create({
        data: {
            title: title,
            description: description,
            category_id: Number(category_id)
        }
    })

    res.json(quiz)
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { title, description, category_id } = req.body

    const quiz = await prisma.quiz.update({
        where: {
            id: Number(id)
        },
        data: {
            title: title,
            description: description,
            category_id: category_id
        }
    })

    res.json(quiz)
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params

    const quiz = await prisma.quiz.delete({
        where: {
            id: Number(id)
        }
    })

    res.json(quiz)
})

export default router