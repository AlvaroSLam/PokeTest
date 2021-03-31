import React from 'react'

class PokeSearch extends React.Component{
    render(){
        return (
            <div className='search-bar'>
                <input onChange={this.props.onChange} type='text' placeholder='Filtra pokemons por nombre...'/>
            </div>
        )
    }
}

export default PokeSearch