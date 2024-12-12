interface pokemonType {
  pokemon: {
    name: "string";
    imgSrc?: "string";
  };
}

export default function PokemonCard({ pokemon }: pokemonTyqpe) {
  // const pokemon = pokemonList[0];
  // const pokemon = { name: "mew", imgSrc: null };

  return (
    <>
      <figure>
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}
        <figcaption>Bulbasaur</figcaption>
      </figure>
    </>
  );
}

// const pokemonList = [
//   {
//     name: "bulbasaur",
//     imgSrc:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
//   },
//   {
//     name: "mew",
//   },
// ];
