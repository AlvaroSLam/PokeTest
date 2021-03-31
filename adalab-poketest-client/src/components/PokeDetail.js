import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


class PokeDetail extends React.Component {
     state = {
         pokeEvolution: []
     }

     componentDidMount(){
        axios.get('http://localhost:5005/api/pokemonEvolution')
        .then((result) =>{
            // this.setState({
            //     pokeEvolution: result.data
            // })
        })
        .catch(err => console.log(err))
     }

    render(){
        const {name, image, id, types} = this.props

        // const {pokeEvolution} = this.state

        // console.log(pokeEvolution)
        
        return (
            <div className='card'>
                <div class='image'>
                    <img className='pokeImg' src={image} alt="pikachu"/>
                    <div className='poke-id'>
                    <span><b>ID/{id}</b></span>
                    </div>
                </div>

                <div className='details'>                
                    <Link to={`/pokemon/${id}`} style={{ textDecoration: 'none', color: '#000000' }}><h3>{name[0].toUpperCase() + name.slice(1)}</h3></Link>
                    {
                        types.map((elem) =>{
                            return <span className='type'>{elem.type.name}</span>
                        })
                    }
                    {/* {
                        pokeEvolution ? 
                            <div className='poke-evolution'>
                                <p>Evoluciona de:</p>
                                <p><b>Bulbasur</b></p>
                            </div>
                        :
                        null

                    }
                     */}
                    
                </div>
            
            </div>
        )
    }
}

export default PokeDetail