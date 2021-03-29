import React from 'react'

class PokemonList extends React.Component {

    render(){
        const {pokemon} = this.props
        return (
        <>
        <h1>Grid of pokemon</h1>
        {
            pokemon.map((elem, index) =>{
                return <h3 key={index}>{elem.name}</h3>
            })
        }
        </>
        )
    }
}

export default PokemonList