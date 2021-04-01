import React from 'react'
import PokeDetail from './PokeDetail'
import PokeSearch from './PokeSearch'
import PokeEvolve from './PokeEvolve'
import axios from 'axios'
import PikachuRunning from '../pikachu_running.gif'



class PokemonList extends React.Component {

    state = {
        pokemon: [],
        filteredPokemon: [],
        pokeEvolution: []
      }
    
      componentDidMount(){
        axios.get('http://localhost:5005/api/allPokemon')
          .then((result) =>{
            this.setState({
              pokemon: result.data,
              filteredPokemon: result.data
            })        
          })
          .catch((err) =>{
            console.log('Error while fetching', err)
          })

          axios.get('http://localhost:5005/api/pokemonEvolution')
            .then((result) =>{
                this.setState({
                    pokeEvolution: result.data
                })
            })
            .catch(err => console.log(err))

      }

      handleChange = (event) => {
          let searchText = event.target.value.toLowerCase()
          let filteredList = this.state.pokemon.filter((elem) =>{
              return elem.name.toLowerCase().includes(searchText)
          })

          this.setState({
            filteredPokemon: filteredList
          })
      }

    render(){
        const {pokemon, filteredPokemon, pokeEvolution} = this.state
        
        if(!pokemon.length){
            return (
              <>
              <div className='pikachu-running'>
                <img src={PikachuRunning} alt='pikachu running'/>
              </div>
              <h3 className='pikachu-running'>Loading. . .</h3>
              </>
            
            )
        }

        return (
        <>
        <PokeSearch onChange={this.handleChange}/>
        <div className='pokeGrid'>
       {
            filteredPokemon.map((elem, index) =>{
                return (
                  <div>
                  <PokeDetail 
                  key={elem.id} 
                  name={elem.name} 
                  image={elem.sprites.front_default} 
                  id={elem.id} 
                  types={elem.types}
                  />

                  <PokeEvolve 
                    name={elem.name}
                    evolution={pokeEvolution}
                  />
                  </div>
                )
            })
        }
        
        </div>
        
        </>
        )
    }
}

export default PokemonList
