import PropTypes from "prop-types";
import styles from "./NavBar.module.css"

function NavBar({ setPokemonIndex, pokemonList }) {

    return (
        <>
          {pokemonList.map((pokemon, index) => (
            <button className={styles.button}
              key={pokemon.name}
              onClick={() => {
                setPokemonIndex(index);
                if (pokemon.name === "Pikachu") {
                  alert("pika pikachu !!!");
                }
              }}
            >
              {pokemon.name}
            </button>
          ))}
        </>
      );
    }

NavBar.propTypes = {
    setPokemonIndex: PropTypes.func.isRequired,
    pokemonList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            imgSrc: PropTypes.string,
        })
    ).isRequired,

};
export default NavBar;