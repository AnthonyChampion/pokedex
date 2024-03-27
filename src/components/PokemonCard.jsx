

function PokemonCard({ pokemon }) {


    return (
        <figure>
            {pokemon.imgSrc === undefined ? <div> <p> ???</p><figcaption>{pokemon.name}  </figcaption></div> : <div><img src={pokemon.imgSrc} /> <figcaption>{pokemon.name}</figcaption></div>}
        </figure >
    );
};





export default PokemonCard;