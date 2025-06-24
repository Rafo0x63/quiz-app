import express from "express" 
import cors from "cors"
import categoriesRoute from "./routes/categories.js" 
import quizzesRoute from "./routes/quizzes.js"
import questionsRoute from "./routes/questions.js"

const app = express() 
app.use(cors())

app.use("/api/categories", categoriesRoute)
app.use("/api/quizzes", quizzesRoute)
app.use("/api/questions", questionsRoute)

app.listen(3000, () => { 
    console.log("Server is Running") 
})