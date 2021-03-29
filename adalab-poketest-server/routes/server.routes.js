const express =  require('express')
const router = express.Router()
const axios =  require('axios')

router.get('/allPokemon', (req, res) => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then((response) =>{
            let pokeArr =  response.data.results
            let promises =  pokeArr.map((elem) =>{
                return axios.get(elem.url)  
            })
           Promise.all(promises)
              .then((allResults) => {
                   res.json(allResults)
               })
               .catch((err) =>{
                    console.log('Error while fetching', err)
               })
        })
        .catch((err) =>{
            console.log('Error while fetching', err)
        })
  })

module.exports =  router