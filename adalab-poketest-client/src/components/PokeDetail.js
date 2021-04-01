import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


class PokeDetail extends React.Component {

    
    render(){
        const {name, image, id, types} = this.props
       
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
                        types.map((elem, index) =>{
                            return <span key={index} className='type'>{elem.type.name}</span>
                        })
                    }
                    
                </div>
            
            </div>
        )
    }
}

export default PokeDetail