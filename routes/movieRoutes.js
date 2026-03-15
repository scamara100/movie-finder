import express from 'express' 
import {movieControllers} from '../controllers/movieController.js'

const router = express.Router()

router.get('/search', movieControllers.searchMovies)
router.get('/movies/:id', movieControllers.getMovieDetails)

export default router

