import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Axios from "axios";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [error, setError] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    height: "",
    weight: "",
    type: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
  });

  const searchPokemon = (event) => {
    event.preventDefault();
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setPokemon({
          name: pokemonName,
          height: response.data.height,
          weight: response.data.weight,
          type: response.data.types[0].type.name,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          speed: response.data.stats[5].base_stat,
        });
        setPokemonChosen(true);
        setError(""); // Clear any existing error message
      })
      .catch((error) => {
        console.log(error);
        setError("Pokemon not found. Please enter a valid name.");
        setPokemonChosen(false);
      });
  };

  return (
    <div className="container-fluid bg-info w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center p-4 text-white">Pokemon Stats</h1>

      <form
        className="bg-white rounded p-5 d-flex flex-column align-items-center shadow"
        onSubmit={searchPokemon}
      >
        <div className="form-group mx-sm-3 mb-2 text-center">
          <label htmlFor="pokemonName" className="font-weight-bold">
            Enter Pokemon Name
          </label>
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Pokemon Name"
            onChange={(event) => {
              setPokemonName(event.target.value);
            }}
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary mt-3">
          Search
        </button>
      </form>
      <div className="d-flex justify-content-center w-100">
        {pokemonChosen && <PokemonCard pokemon={pokemon} />}
      </div>
    </div>
  );
}

export default App;
