import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import PokemonLogo from '../../assets/pokemonLogo.png'; 
import "./Navbar.css";
import { Button } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.10),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.15),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(0),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#003a70',
    fontWeight: 'bold',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        width: '20ch',
        '&:focus': {
            width: '25ch',
        },
        },
    },
}));

export default function Navbar({ updateName, getPokemons }) {

    return (
        <Box sx={{ flexGrow: 1, marginBottom: 4 }}>
            <AppBar position="static" sx={{ backgroundColor: '#fbd743' }}>

                <Toolbar className='navbar-space'>
                    <div className='search-space'>
                        <Search onChange={(e) => updateName(e.target.value)} className="search-input">
                            <SearchIconWrapper>
                                <SearchIcon style={{ color: '#003a70' }}/>
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Digite aqui..."
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>

                        <Button onClick={getPokemons}
                            style={{ 
                            backgroundColor: '#003a70', 
                            color: 'white', 
                            fontWeight: 'bold',
                            paddingLeft: 20,
                            paddingRight: 20,
                            borderRadius: 25
                            }}>
                            Buscar Pokémon
                        </Button>
                    </div>

                    <img alt="Pokebmon Logo" src={PokemonLogo} className="pokemon-logo" />
                </Toolbar>
            </AppBar>
        </Box>
    );
}