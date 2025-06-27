import express from "express"
import { PrismaClient } from '../../generated/prisma/client.js'

const router = express.Router()
const prisma = new PrismaClient()

router.get("/", async (req, res) => { 
    const questions = await prisma.question.findMany()
    res.json(questions)
})

router.get("/:category_title/:quiz_title", async (req, res) => {
    let { quiz_title } = req.params
    quiz_title = quiz_title.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    
    const quiz = await prisma.quiz.findFirst({
        where: { title: quiz_title }
    })

    const questions = await prisma.question.findMany({
        where: { quiz_id: quiz.id }
    })

    quiz.questions = questions

    res.json({quiz, questions})
})

router.post('/', async (req, res) => {
    const { question, options, correct_answer, quiz_id } = req.body
    
    const newQuestion = await prisma.question.create({
        data: {
            question: question,
            options: options,
            correct_answer: correct_answer,
            quiz_id: quiz_id
        }
    })

    res.json(newQuestion)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params

    const question = await prisma.question.delete({
        where: {
            id: Number(id)
        }
    })
})

export default router
