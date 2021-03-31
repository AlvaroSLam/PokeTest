import React from 'react'
import PokemonList from './components/PokemonList'
import {Switch, Route} from "react-router-dom"
import PokeCard from './components/PokeCard'


class App extends React.Component {

  render(){
    return (
      <div className='background'>
        {/* <div className='black'>
        <div></div>
        <div></div>
        </div> */}
      
        {/* <div className='red'>
          <div></div>
          <div></div>
        </div> */}
        
      
        <div className='poke-list'>
          <Route exact path='/' component={PokemonList}/>
        </div>

        <Switch>          
          <Route path='/pokemon/:pokemonId' render={(routeProps) =>{
            return <PokeCard {...routeProps}/>
          }}/>
        </Switch>

      </div>
    );
    
  }
 
}

export default App;
