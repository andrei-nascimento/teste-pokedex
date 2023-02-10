import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import PokebolaIcon from '../../assets/pokebola.png'; 
import "./Navbar.css";
import { Button } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
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
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
            width: '20ch',
        },
        },
    },
}));

export default function Navbar({ updateName, getPokemons }) {

    return (
        <Box sx={{ flexGrow: 1, marginBottom: 4 }}>
            <AppBar position="static" sx={{ backgroundColor: '#003a70' }}>

                <Toolbar className='navbar-space'>
                    <div className='search-space'>
                        <Search onChange={(e) => updateName(e.target.value)}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Digite aqui..."
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>

                        <Button onClick={getPokemons}
                            style={{ 
                            backgroundColor: 'white', 
                            color: '#003a70', 
                            fontWeight: 'bold' }}>
                            Buscar Pokémon
                        </Button>
                    </div>

                    <Avatar alt="Pokebola" src={PokebolaIcon} />
                </Toolbar>
            </AppBar>
        </Box>
    );
}