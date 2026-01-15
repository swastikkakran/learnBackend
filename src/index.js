import dotenv from "dotenv"
import app from "./app.js"
import connectDB from "./db/index.js"

dotenv.config({
    path:"./.env"
})

const port = process.env.PORT || 3000

connectDB()
.then(
  app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})

)
.catch((err) => {
  console.error("MongoDB connection couldn't be established...", err)
  process.exit()
})