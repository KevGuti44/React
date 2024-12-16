
interface NavProps{
  pokemonList : Pokemon[];
  setPokemonIndex : (index: number) => void;
}
interface Pokemon {
    name: string;
    imgSrc?: string;
}



export default function NavBar({pokemonList, setPokemonIndex} : NavProps) {
  return (
    <nav>
      {pokemonList.map((pokemon, index) => (
        <button key={pokemon.name} type = "button" onClick={() => setPokemonIndex(index)}> 
          {pokemon.name}
      </button>
      )
    )}
    </nav>
  );
}

  // const [pokemonIndex, setPokemonIndex] = useState(0);