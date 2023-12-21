import styled from '@emotion/styled';
import{Menu,MenuItem, ThemeProvider,createTheme } from '@mui/material';
import React from 'react';

const theme = createTheme({
    palette: {
      mac: {
        main: '#fd8f52',
        light: '#ffdca2', 
        dark: '#fd8f52', 
        contrastText: '#a62d53', 
      },
    },
  });

const MenuItemStyled=styled(MenuItem)`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    margin:auto; 
    cursor: pointer;
    color:#fe676e; 
`



function MobileMenu({open,handleClose}){
    const openMenu=Boolean(open);
    return(
        <ThemeProvider theme={theme}>
        <Menu
            id="basic-menu"
            anchorEl={open}
            open={openMenu}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
            color='mac'
            
        >
            <MenuItemStyled>About</MenuItemStyled>
            <MenuItemStyled>Skills</MenuItemStyled>
            <MenuItemStyled>Projects</MenuItemStyled>
            <MenuItemStyled>Blog</MenuItemStyled>
            <MenuItemStyled>Education</MenuItemStyled>
        </Menu>
        </ThemeProvider>
    )
}

export default MobileMenu;