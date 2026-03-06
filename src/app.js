import express from "express"
import cors from "cors"

const app = express()

//basic configuration middlewares
app.use(express.json({ limit:"16kb" }))
app.use(express.urlencoded({ extended:true, limit:"16kb" }))
app.use(express.static("public"))

//cors configurations
app.use(cors({
    origin:process.env.CORS_ORIGIN?.split(","),
    credentials:true,
    methods:["GET", "POST", "DELETE", "PATCH", "OPTIONS", "PUT"],
    allowedHeaders:["Authorization", "Content-Type"]
}))

//healthcheck route
import healthCheckRouter from "./routes/healthcheck.routes.js"
app.use("/api/v1/healthcheck", healthCheckRouter)

//auth routes
import registerAuthRouter from "./routes/auth.routes.js"
app.use("/api/v1/auth", registerAuthRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app