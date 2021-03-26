const express =  require('express')
const router = express.Router()
const axios =  require('axios')

router.get('/allPokemon', (req, res) => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then((response) =>{
            
            let pokeArr = response.data.results
            pokeArr.forEach((elem, index) =>{
                let url =  elem.url                
                axios.get(url)
                .then((result) => {
                    let newArr = []
                    newArr.push(result.data)
                    console.log('Here starts -------------------------------------------')
                    console.log(newArr)
                    console.log('Here ends -------------------------------------------')
                })
                .catch(err => console.log(err))
            })        
            
        })
        .catch((error) =>{
            console.log(error)
        })
  })

module.exports =  router