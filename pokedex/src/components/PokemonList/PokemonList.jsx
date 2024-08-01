import { useEffect, useState } from "react"
import axios from 'axios'
import Pokemon from "../Pokemon/Pokemon";


function PokemonList(){
        
    const[pokemonList, setPokemonList] = useState([]);
    const[isLoading, setIsLoading] = useState(true)

    const[pokedexUrl, setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon');

    const [nextUrl, setNextUrl] = useState('');
    const[prevUrl, setPrevUrl] = useState('');
    async function downloadPokemons(){
        const res =  await axios.get(pokedexUrl); //download list of 20 pokemon
        const pokemonResult = res.data.results; // get array of pokemon from results
        console.log(res.data);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        //iterating over an array of pokemons and using there url to create an array of promise that will download 20 pokemons
        const pokemonResultPromise = pokemonResult.map((pokemon) => axios.get(pokemon.url))

        //passing promise axios.all
        const pokemonData = await axios.all(pokemonResultPromise);  // array of 20 pokemon  details
        console.log(pokemonData);
        // now iterate of data of each pokemon
        const response = pokemonData.map((pokedata) => {
            const pokemon = pokedata.data
            return {
                id: pokemon.id,
                name : pokemon.name,
                image : pokemon.sprites.other ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_default,
                type : pokemon.types
            }
        });
        console.log(response);
        setPokemonList(response);
        setIsLoading(false);
    }
    useEffect(() => {
        downloadPokemons()
    }, [pokedexUrl]);

    return(
        <div>
           <div>
           <h2>Pokemon list</h2>
           {(isLoading) ? "Loading..." : pokemonList.map((p) => <Pokemon name={p.name} image={p.image}  key={p.id} id={p.id}/>)}
           </div>
           <div className="controls">
            <button disabled={prevUrl == null} onClick={() =>setPokedexUrl(prevUrl)}>Prev</button>
            <button disabled={nextUrl == null} onClick={() => setPokedexUrl(nextUrl)}>Next</button>
           </div>
        </div>
    )
}

export default PokemonList