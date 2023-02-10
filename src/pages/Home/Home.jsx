import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Container } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
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
    });

    const handlePokemonFromNavbar = search => {
        setPokemonName(search);
    };

    const getPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
            setPokemon({ 
                name: pokemonName[0].toUpperCase() + pokemonName.substring(1), 
                img: response.data.sprites.front_default, 
                type: response.data.types[0].type.name,
                hp: response.data.stats[0].base_stat,
                attack: response.data.stats[1].base_stat,
                defense: response.data.stats[2].base_stat,
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
            <Container maxWidth="false">
                <Grid container className='pokemon-container'>
                    <Grid item className='pokemon-card'>
                        {!pokemonChosen ? (
                            <p className="title-null">Pesquise o nome de um Pokémon</p>
                        ) : (
                            <div className="pokemon-data">
                                <p className="pokemon-name">{pokemon.name}</p>
                                <div className="pokemon-table">
                                    <img className="pokemon-img" src={pokemon.img} alt="pokemon image" />
                                    <div className="pokemon-atributes">
                                        <p className="pokemon-atribute">Tipo: {pokemon.type}</p>
                                        <p className="pokemon-atribute">HP: {pokemon.hp}</p>
                                        <p className="pokemon-atribute">Ataque: {pokemon.attack}</p>
                                        <p className="pokemon-atribute">Defesa: {pokemon.defense}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}