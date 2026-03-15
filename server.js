import 'dotenv/config'
import express from "express"
import movieRoutes from "./routes/movieRoutes.js"

const app = express()
const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.send("Hello word")
})

app.use('/api/search', movieRoutes)

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})