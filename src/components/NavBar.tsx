import PokemonCard from "./PokemonCard";

interface Pokemon {
	name: string;
	imgSrc: string;
}
interface NavBarProps {
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}
export default function NavBar({ setPokemonIndex, pokemonList }: NavBarProps) {
	return (
		<div>
			<nav>
				{pokemonList.map((Pokemon, index) => (
					<button
						key={Pokemon.name}
						type="button"
						onClick={() => {
							setPokemonIndex(index);
							index === 3 ? alert("pika pikachu !!!") : "";
						}}
					>
						{Pokemon.name}
					</button>
				))}
			</nav>
		</div>
	);
}
