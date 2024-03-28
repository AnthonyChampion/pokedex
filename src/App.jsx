import PokemonCard from "./components/PokemonCard";

function App() {

  const pokemonList = [
    {
      name: "bulbasaurE",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "Mew",
      imgSrc: "https://www.media.pokekalos.fr/img/jeux/pokemonunite/pokemon/present/mew.png"
    },
  ];

  return (
    <div>
      <PokemonCard pokemon={pokemonList[1]} />
    </div>
  );
}
export default App;