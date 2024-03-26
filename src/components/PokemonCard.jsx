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

function PokemonCard() {
    const pokemon = pokemonList[1];

    return (
        <figure>
            {pokemon.imgSrc === undefined ? <div> <p> ???</p><figcaption>{pokemon.name}  </figcaption></div> : <div><img src={pokemon.imgSrc} /> <figcaption>{pokemon.name}</figcaption></div>}
        </figure >
    );
};





export default PokemonCard;