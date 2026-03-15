// http://www.omdbapi.com/?i=tt3896198&apikey=86bf6741

import dotenv from "dotenv/config"
import express from "express"
import {movieRoutes} from "./routes/movieRoutes.js"

const app = express()
const PORT = process.env.PORT

app.use('/api/search', movieRoutes)

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})