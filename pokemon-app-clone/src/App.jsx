import { useEffect, useState } from 'react'
import './App.css'
import PokemonThumbnail from '../../pokemon-app/src/Components/PokemonThumbnail';

function App() {
  const [count, setCount] = useState(0)
  const [pokemonList, setPokemonList] = useState([]);
  const [loadPoke,setLoadPoke] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  const getAllPokemons = async () =>{
    const res = await fetch(loadPoke)
    const data = await res.json()
    console.log("data",data);
    setLoadPoke(data.next)
   
    function createPokemonObject(result){
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json();
        setPokemonList(currentList => [...currentList,data])
      });
    }
    createPokemonObject(data.results)
    await console.log(pokemonList)
  }

  useEffect(()=>{getAllPokemons()},[]);

  return (
  <div className="app">
    <p className="heading">Pokemon Kingdom</p>
   <section className="pokemon-display">
   {pokemonList.map((pokemon, index)=>
      <PokemonThumbnail key={index} name={name} image={pokemon.sprites.other.dream_world.front_default}/>
    )}
   </section>
  </div>
  )
}

export default App
