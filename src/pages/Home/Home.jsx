import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Container } from "@mui/material";
import PokeCard from "../../components/PokeCard/PokeCard";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

export const Home = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {
        let endpoints = []
        for(let i = 1; i <= 20; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
        }

        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));

        // axios.get("https://pokeapi.co/api/v2/pokemon?limit=20")
        // .then((res) => setPokemons(res.data.results))
        // .catch((err) => console.log(err))
    };

    const pokemonFilter = (name) => {
        let filteredPokemons = []

        if(name === "") {
            getPokemons();
        }
        
        for(let i in pokemons) {
            if(pokemons[i].data.name.includes(name)) {
                filteredPokemons.push(pokemons[i]);
            }
        }
        setPokemons(filteredPokemons);
    }

    return(
        <>
            <Navbar pokemonFilter={pokemonFilter}/>
            <Container maxWidth="false">
                <Grid container spacing={4}>
                    {pokemons.map((pokemon, key) => (
                        <Grid item xs={2} key={key}>
                            <PokeCard 
                                name={pokemon.data.name}
                                image={pokemon.data.sprites.front_default}    
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}