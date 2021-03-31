import React from 'react'
import PokeDetail from './PokeDetail'
import PokeSearch from './PokeSearch'
import axios from 'axios'
import PikachuRunning from '../pikachu_running.gif'

class PokemonList extends React.Component {

    state = {
        pokemon: [],
        filteredPokemon: []
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
        const {pokemon, filteredPokemon} = this.state
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
            filteredPokemon.map((elem) =>{
                return <PokeDetail 
                  key={elem.id} 
                  name={elem.name} 
                  image={elem.sprites.front_default} 
                  id={elem.id} 
                  types={elem.types}
                  />
            })
        }
        </div>
        
        </>
        )
    }
}

export default PokemonList