import express from 'express' 
import movieControllers from '../controllers/movieController.js'

const router = express.Router()

router.get('/', movieControllers.searchMovies)
router.get('/:id', movieControllers.getMovieDetails)

export default router

