const express =  require('express')
const router = express.Router()
const axios =  require('axios')

//--------Get the information af all the pokemons-------------//
router.get('/allPokemon', (req, res) =>{
    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then((res) => {
      return res.data.results
    })
    .then((results) => {
      return Promise.all(results.map((res) => axios.get(res.url)))
    })
    .then((results) => {
      res.status(200).json(results.map((res) => res.data))
    })
})

//---------Get only one Pokemon Info-----------//
router.get('/pokemon/:pokemonId', (req, res) =>{
    let pokeId = req.params.pokemonId

    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`)
        .then((result) => {
            res.json(result.data)
        })
        .catch((err) =>{
            console.log(err)
        })
})

//-------Get the information about the evolution of all pokemon--------------//
router.get('/pokemonEvolution', (req, res) =>{
    axios.get('http://localhost:5005/api/allPokemon')
        .then((res) =>{
            return res.data
        })
        .then((results) =>{
            return Promise.all(results.map((res) => axios.get(res.species.url)))
        })
        .then((results) =>{
            res.json(results.map((res) => res.data))
        })
})



module.exports =  router