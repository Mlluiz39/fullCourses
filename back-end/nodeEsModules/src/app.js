import express from "express"
import { userRoutes, companyRoutes } from "./modules/index.js"

const app = express()

app.get("/", (req, res) => {
  return res.send("Hello World!")
})

app.use(userRoutes)
app.use(companyRoutes)

export default app