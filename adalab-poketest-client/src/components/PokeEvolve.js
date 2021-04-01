import React, { Component } from 'react'

class PokeEvolve extends Component {
    render() {
        const {evolution, name} = this.props
        return (
            <div>
                {
                  evolution.map((elem) =>{
                      return elem.evolves_from_species === null ?
                      (elem.name === name ? 
                        <div className='poke-evolution'>
                            <p>Evoluciona de:</p>
                            <p><b></b></p>
                        </div>  : null)
                      : 
                      (elem.name === name ? 
                        <div className='poke-evolution'>
                            <p>Evoluciona de:</p>
                            <p><b>{elem.evolves_from_species.name}</b></p>
                        </div> : null)                     
                      
                  })  
                }
            </div>
        )
    }
}

export default PokeEvolve
