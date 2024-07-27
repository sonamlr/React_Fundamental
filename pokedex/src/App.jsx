import './App.css'
import Pokedex from './components/Pokedex/Pokedex'
import Search from './components/Search/Search'
import PokemonList from './components/PokemonList/PokemonList'
function App() {

  return (
    <>
    <h1>Pokedex</h1>
    <Search />
     <Pokedex />
     <PokemonList />
    </>
  )
}

export default App
