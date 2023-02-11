import React, { useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import Pokebola from "../../assets/pokebola.png";
import "./Home.css";

export const Home = () => {
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonChosen, setPokemonChosen] = useState(false);
    const [pokemon, setPokemon] = useState({
        name: "", 
        img: "",
        type: "",
        hp: "",
        attack: "",
        defense: "",
        specialAttack: "",
        specialDefense: "",
        speed: "",
    });

    const handlePokemonFromNavbar = search => {
        setPokemonName(search);
    };

    const getPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then((response) => {
                setPokemon({ 
                    name: pokemonName[0].toUpperCase() + pokemonName.substring(1), 
                    img: response.data.sprites.front_default, 
                    type: response.data.types[0].type.name,
                    hp: response.data.stats[0].base_stat,
                    attack: response.data.stats[1].base_stat,
                    defense: response.data.stats[2].base_stat,
                    specialAttack: response.data.stats[3].base_stat, 
                    specialDefense: response.data.stats[4].base_stat,
                    speed: response.data.stats[5].base_stat,
                });
            setPokemonChosen(true);
        })
    };

    return(
        <>
            <Navbar 
                updateName={handlePokemonFromNavbar}
                getPokemons={getPokemon}    
            />
            <Grid container className='pokemon-container'>
                {!pokemonChosen ? (
                    <div className="box-null">
                        <p className="title-null">Pesquise o nome de um Pokémon</p>
                        <img src={Pokebola} alt="Pokebola" className="pokebola-img" />
                    </div>
                ) : (
                    <div className="pokemon-data">
                        <p className="pokemon-name">{pokemon.name}</p>
                        <div className="pokemon-table">
                            <img className="pokemon-img" src={pokemon.img} alt="pokemon" />
                            <div className="pokemon-atributes">
                                <p className="pokemon-atribute">Tipo: {pokemon.type}</p>
                                <p className="pokemon-atribute">HP: {pokemon.hp}</p>
                                <p className="pokemon-atribute">Ataque: {pokemon.attack}</p>
                                <p className="pokemon-atribute">Defesa: {pokemon.defense}</p>
                                <p className="pokemon-atribute">Ataque Especial: {pokemon.specialAttack}</p>
                                <p className="pokemon-atribute">Defesa Especial: {pokemon.specialDefense}</p>
                                <p className="pokemon-atribute">Velocidade: {pokemon.speed}</p>
                            </div>
                        </div>
                        {/* <div className="evolution-table">
                            <p>Evolução:</p>
                            <p>{pokemon.evolution}</p>
                        </div> */}
                    </div>
                )}
            </Grid>
            <Footer />
        </>
    );
}