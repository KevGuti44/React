import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
// const pokemon = pokemonList[0];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
      <div>
        {pokemonIndex > 0 ? (
          <button
            type="button"
            onClick={() => setPokemonIndex(pokemonIndex - 1)}
          >
            Précédent
          </button>
        ) : (
          "il y a bien un suivant"
        )}
      </div>
      <div>
        {pokemonIndex < pokemonList.length - 1 ? (
          <button
            type="button"
            onClick={() => setPokemonIndex(pokemonIndex + 1)}
          >
            Suivant
          </button>
        ) : (
          "il y a bien un précédent"
        )}
      </div>
    </>
  );
}

export default App;
