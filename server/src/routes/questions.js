import express from "express"
import { PrismaClient } from '../../generated/prisma/client.js'

const router = express.Router()
const prisma = new PrismaClient()

router.get("/", async (req, res) => { 
    const questions = await prisma.questions.findMany()
    res.json(questions)
})

router.get("/:category_title/:quiz_title", async (req, res) => {
    let { quiz_title } = req.params
    quiz_title = quiz_title.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    
    const quiz = await prisma.quizzes.findFirst({
        where: { title: quiz_title }
    })

    const questions = await prisma.questions.findMany({
        where: { quiz_id: quiz.id }
    })

    res.json(questions)
})

export default router
