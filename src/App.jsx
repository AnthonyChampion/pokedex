import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);

  const pokemonList = [
    {
      name: "Bulbizarre",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "Salamèche",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "Carapuce",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "Pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "Mew",
      imgSrc: "https://www.media.pokekalos.fr/img/jeux/pokemonunite/pokemon/present/mew.png"
    },
  ];

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <NavBar setPokemonIndex={setPokemonIndex} pokemonIndex={pokemonIndex} pokemonList={pokemonList} />
    </div>
  );
}
export default App;


