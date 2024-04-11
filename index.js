import express from 'express'
import cors from 'cors'
import config from "./config.js"
import db from "./db.js"
import router from "./routes/index.js"

const PORT = config.PORT || 6060
const app = express()
app.use(express.urlencoded({ extended: true}))
app.use(cors())
app.use('/api', router)
app.use(express.json())

await db.authenticate()
await db.sync()

app.listen(PORT,  ()=> console.log(`сервер запущен ${PORT}...`))