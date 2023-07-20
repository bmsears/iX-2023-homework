import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function PokemonCard({ pokemon }) {
  return (
    <div className="card mt-5" style={{ maxWidth: "60rem" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={pokemon.img}
            className="card-img"
            alt={pokemon.name}
            style={{ maxHeight: "200px", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-8 pl-5">
          <div className="card-body">
            <h5 className="card-title">{pokemon.name}</h5>
            <div className="row">
              <div className="col-md-5">
                <dl className="row">
                  <dt className="col-sm-4 text-right">Height:</dt>
                  <dd className="col-sm-7">{pokemon.height}</dd>

                  <dt className="col-sm-4 text-right">Weight:</dt>
                  <dd className="col-sm-7">{pokemon.weight}</dd>

                  <dt className="col-sm-4 text-right">Type:</dt>
                  <dd className="col-sm-7">{pokemon.type}</dd>
                </dl>
              </div>
              <div className="col-md-6">
                <dl className="row">
                  <dt className="col-sm-4 text-right">HP:</dt>
                  <dd className="col-sm-7">{pokemon.hp}</dd>

                  <dt className="col-sm-4 text-right">Attack:</dt>
                  <dd className="col-sm-7">{pokemon.attack}</dd>

                  <dt className="col-sm-4 text-right">Defense:</dt>
                  <dd className="col-sm-7">{pokemon.defense}</dd>

                  <dt className="col-sm-4 text-right">Speed:</dt>
                  <dd className="col-sm-7">{pokemon.speed}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
