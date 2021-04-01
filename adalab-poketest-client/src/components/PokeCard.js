import axios from 'axios'
import React from 'react'
import {Link} from 'react-router-dom'

class Pokecard extends React.Component {

    state = {
        pokemon: []
    }

    componentDidMount(){
        let id = this.props.match.params.pokemonId
        
        axios.get(`http://localhost:5005/api/pokemon/${id}`)
            .then((response) =>{                
                this.setState({
                    pokemon: response.data
                })
            })
            .catch((err) =>{
                console.log(err)
            })
    }
    
    render(){
        const {pokemon} = this.state
   
        if(this.state.pokemon.length === 0){
            return <h1 className='pikachu-running'>Loading . . .</h1>
        }

        return (
            <div>
                

                <div className='poke-card'>
                <img src={pokemon.sprites.other.dream_world.front_default} alt='poke-img' />
                <div>
                    <h1>{pokemon.id}. {pokemon.name.toUpperCase()}</h1>
                    <p><em>Height: {pokemon.height}</em> // <em>Weight: {pokemon.weight}</em></p>
                    <h3>Abilities</h3>
                    {
                        pokemon.abilities.map((elem, index) =>{
                            return <p> <b>{index+1}.</b> {elem.ability.name[0].toUpperCase() + elem.ability.name.slice(1)}</p>
                        })
                    } 
                    <Link to='/' className='back-home'>Return to Home Page</Link> 
                </div>
                
                </div> 
            </div>
                       
        )
    }
}

export default Pokecard