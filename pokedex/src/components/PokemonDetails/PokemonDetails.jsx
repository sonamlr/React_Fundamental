import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function PokemonDetails(){
    const {id} = useParams();
    const [Pokemon, setPokemon] = useState({});
    async function downloadPokemons(){
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        console.log(res.data);
        setPokemon({
            name: res.data.name,
            image: res.data.sprites.other.dream_world.front_default,
            weight: res.data.weight,
            height: res.data.height
        })
    }

    useEffect(()=>{
        downloadPokemons();
    }, []);

    return(
        <div>
            <div>{Pokemon.name}</div>
            <div><img src={Pokemon.image} alt="" /></div>
            <div>Height : {Pokemon.height}</div>
            <div>Weight : {Pokemon.weight}</div>
        </div>
    );
}

export default PokemonDetails