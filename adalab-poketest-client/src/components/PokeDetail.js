import React from 'react'
import {Link} from 'react-router-dom'


class PokeDetail extends React.Component {

    render(){
        const {name, image, id, types} = this.props
        console.log(types)
        return (
            <div className='card'>
                <div class='image'>
                    <img className='pokeImg' src={image} alt="pikachu"/>
                    <div className='poke-id'>
                    <span><b>ID/{id}</b></span>
                    </div>
                </div>

                <div className='details'>                
                    <Link to={`/pokemon/${id}`}><h3>{name[0].toUpperCase() + name.slice(1)}</h3></Link>
                    {
                        types.map((elem) =>{
                            return <span className='type'>{elem.type.name}</span>
                        })
                    }
                    <div className='poke-evolution'>
                        <p>Evoluciona de:</p>
                        <p><b>Bulbasur</b></p>
                    </div>
                    
                    {/* 
                    For Evolution
                    <div>
                        {types ? <span className='type'>FIRE</span> : null}
                    </div> */}
                </div>
            
            </div>
        )
    }
}

export default PokeDetail