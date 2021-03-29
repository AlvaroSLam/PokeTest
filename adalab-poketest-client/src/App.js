import React from 'react'
import axios from 'axios'
import PokemonList from './components/PokemonList'


class App extends React.Component {

  state = {
    pokemon: []
  }

  componentDidMount(){
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then((result) =>{
        this.setState({
          pokemon: result.data.results
        })        
      })
      .catch((err) =>{
        console.log(err)
      })
  }

  render(){
    return (
      <div>
        <h1>PokeTest</h1>
        <PokemonList pokemon={this.state.pokemon} />
      </div>
    );
  }
 
}

export default App;
