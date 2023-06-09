import express from "express"
import productsRouter from "./src/routes/products.js"

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use("/", productsRouter)

app.listen(PORT, () => {
    console.log(`Server listening on port ->${PORT}<-`)
})