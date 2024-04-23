import express from "express"
import dotenv from "dotenv"
import dbConfig from "./config/db.js"
import tempRouter from "./routes/tempRoutes.js"
import cors from "cors"
dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000

app.use(
  cors({
    origin: "*",
  })
)



dbConfig()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1", tempRouter)

console.log(process.env.DB_URI)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
