import axios from 'axios'
import 'dotenv/config'

const searchMovies = async (req, res) => {
    try{
        const s = req.query.title

        if (!s){
            return res.status(400).json({"Error": "Title query parameter is required"})
        }

        const response = await axios.get(`http://www.omdbapi.com/?s=${s}&apikey=${process.env.OMDB_API_KEY}`)
        res.status(200).json(response.data)

    }catch(e){
        if(e.response){
            console.error('API Error: ',  e.response.status, e.response.data)
            res.status(e.response.status).json({ message: 'Error fetching data from external API.' })
        }else{
            console.error('Network Error: ', e.message)
            res.status(500).json({message: 'A network error occurred'})
        }
    }
}

const getMovieDetails = async (req, res) =>{
    try{
        const i = req.params.id

        const response = await axios.get(`http://www.omdbapi.com/?i=${i}&apikey=${process.env.OMDB_API_KEY}`)
        res.status(200).json(response.data)
    }catch(e){
         if(e.response){
            console.error('API Error: ',  e.response.status, e.response.data)
            res.status(e.response.status).json({ message: 'Error fetching data from external API.' })
        }else{
            console.error('Network Error: ', e.message)
            res.status(500).json({message: 'A network error occurred'})
        }
    }
}

export default {searchMovies, getMovieDetails}