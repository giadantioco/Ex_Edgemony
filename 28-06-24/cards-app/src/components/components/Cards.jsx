import "./Cards.css";
import pokemons from "../../data.json";

function Cards() {
  return (
    <div className="card-list">
      {pokemons.map((pokemon, index) => (
        <Card
          key={index}
          img={pokemon.image}
          name={pokemon.name}
          id={pokemon.id}
          type={pokemon.type}
        />
      ))}
    </div>
  );
}

function Card({ img, name, id, type }) {
  return (
    <div className={`card ${type}`}>
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <span>{id}</span>
      <p>{type}</p>
    </div>
  );
}

export { Cards };
