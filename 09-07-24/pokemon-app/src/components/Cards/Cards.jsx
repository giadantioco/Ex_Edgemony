import styles from "./Cards.module.css";
import pokemons from "../../data.json"; // import and declare json array
import { useState } from "react";
import { Form } from "../Form/Form"; // import form component

function Cards() {
  const [searchPokemon, setSearchPokemon] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);

  const handlePokemonChange = (name) => {
    console.log(name);
    setSearchPokemon(name);
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredPokemons(filtered);
    console.log(filtered);
  };

  return (
    <>
      <Form setSearchPokemon={handlePokemonChange} />
      <div className={styles.cardList}>
        {filteredPokemons.map((pokemon, index) => (
          <Card
            // render the parameters by getting them from json
            key={index}
            img={pokemon.image}
            name={pokemon.name}
            id={pokemon.id}
            type={pokemon.type}
          />
        ))}
      </div>
    </>
  );
}

// function to render single card
// props between {} if not declared as props
function Card({ img, name, id, type }) {
  return (
    // pass the parameter to HTML tags
    <div className={`${styles.card} ${type}`}>
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <span>{id}</span>
      <p>{type}</p>
    </div>
  );
}

export { Cards };
