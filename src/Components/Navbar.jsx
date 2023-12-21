import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MobileMenu from './MobileMenu';
import {Link} from 'react-scroll';

const MobileMenuButton = styled(Button)`
  display: none;

  @media (max-width: 640px) {
    display: flex;
    align-items: center;
  }
`;

const MenuIconWrapper = styled(Box)`
  margin-right: 10px;
`;

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

const Nav = styled(Box)`
  font-family: 'Poppins', sans-serif;
  background: rgba(253, 143, 82,0.5);
  padding: 0 15px !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  height: 80px;
  width: 100%;
  color: #a62d53;
  top: 0; 
  left: 0;
  right: 0;
  z-index: 1000;

`;

const NavContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  height: 56px;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavItems = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width:50%;
`;

const NavLogo = styled(Box)`
  width: 30%;
  padding: 0 10px;
  display: flex;
  margin-left:50px;
  justify-content: flex-start;
  cursor: pointer;
  align-items: center;
  font-weight: 700;
  font-size: 1.4rem;
`;

const NavLink = styled(Link)`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  margin:auto; 
  cursor: pointer;
  
`;

const ButtonContainer = styled(Box)`
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  align-items: center;

  & > div {
    font-family: 'Poppins', sans-serif;
  }
`;



function Navbar() {
    const [windowDimension, setWindowDimension] = useState(null);

    useEffect(() => {
      setWindowDimension(window.innerWidth);
    }, []);
  
    useEffect(() => {
      function handleResize() {
        setWindowDimension(window.innerWidth);
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const isMobile = windowDimension <= 853;

    const [open,setOpen]=useState();
    function handleClick(e){
        setOpen(e.currentTarget);
    }

    function handleClose(){
        setOpen(null);
    }

  return (
    <ThemeProvider theme={theme}>
      <Nav>
        
          <NavLogo>Portfolio</NavLogo>
          {isMobile?(
            <>
            <MobileMenuButton onClick={handleClick} >
              <MenuIconWrapper >
                <MenuIcon fontSize='large'/>
              </MenuIconWrapper>
            </MobileMenuButton>
            <MobileMenu open={open} handleClose={handleClose} />
            
          </>
          ):(
            <NavContainer>
            <NavItems>
                <NavLink 
                    activeClass='active'
                    to="about" 
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={500}>
                      About
                </NavLink>
                <NavLink 
                    activeClass='active'
                    to="skills" 
                    spy={true} 
                    smooth={true} 
                    offset={-20} 
                    duration={500}>
                      Skills
                </NavLink>
                <NavLink 
                    activeClass='active'
                    to="projects" 
                    spy={true} 
                    smooth={true} 
                    offset={30} 
                    duration={500}>
                      Projects
                </NavLink>
                <NavLink 
                    activeClass='active'
                    to="blogs" 
                    spy={true} 
                    smooth={true} 
                    offset={-20} 
                    duration={500}>
                      Blogs
                </NavLink>
                <NavLink 
                    activeClass='active'
                    to="education" 
                    spy={true} 
                    smooth={true} 
                    offset={60} 
                    duration={500}>
                      Education
                </NavLink>
            </NavItems>
            <ButtonContainer>
                <Button variant="contained" size="large" color="mac" href='https://github.com/SuhaniTalreja'>
                <NavLink>GitHub Profile</NavLink>
                </Button>
            </ButtonContainer>
            </NavContainer>
          )}
          
        
      </Nav>
    </ThemeProvider>
  );
}

export default Navbar;
