import PokemonCard from "./components/PokemonCard";
// const pokemon = pokemonList[0];
function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  return <PokemonCard pokemon={pokemonList[0]} />;
}

export default App;
