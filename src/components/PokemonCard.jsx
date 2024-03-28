import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {

    PokemonCard.propTypes = {
        pokemon: PropTypes.shape({
            name: PropTypes.string.isRequired,
            imgSrc: PropTypes.node

        })

    }

    return (
        <figure>
            {pokemon.imgSrc === undefined ? <div> <p> ???</p><figcaption>{pokemon.name}  </figcaption></div> : <div><img src={pokemon.imgSrc} /> <figcaption>{pokemon.name}</figcaption></div>}
        </figure >
    );
};





export default PokemonCard;