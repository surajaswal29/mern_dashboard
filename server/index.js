import express from "express"
import dotenv from "dotenv"
import dbConfig from "./config/db.js"
import tempRouter from "./routes/tempRoutes.js"
import cors from "cors"

const app = express()

app.use(
  cors({
    origin: "*",
  })
)

dotenv.config()

dbConfig()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1", tempRouter)

console.log(process.env.DB_URI)

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
