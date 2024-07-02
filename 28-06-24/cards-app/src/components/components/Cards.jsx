import "./Cards.css";
import pokemons from "../../data.json"; // import and declare json array 

// render multiple cards
function Cards() {
  return (
    <div className="card-list"> 
      {pokemons.map((pokemon, index) => (
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
  );
}

// function to render single card
// props between {} if not declared as props
function Card({ img, name, id, type }) {
  return (
    // pass the parameter to HTML tags
    <div className={`card ${type}`}> 
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <span>{id}</span>
      <p>{type}</p>
    </div>
  );
}

export { Cards };
