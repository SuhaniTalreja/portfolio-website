import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import React, { useState, useEffect } from 'react';
import { Data } from "./Utils/introData";
import {createTheme,ThemeProvider} from '@mui/material/styles';
import Typewriter from "typewriter-effect";

const Container=styled(Box)`
    height:100%;    
    display:flex;
    flex-direction:column;
    margin-top:5rem;
    width: 100%; 
    padding:10px 23px 100px;
    @media (min-width: 843px) {
        flex-direction: row;
    }
    @media (max-width: 843px) {
        padding:10px 23px 60px;
        align-items:center; 
    }
`

const Intro=styled(Box)`
    display:flex;
    flex-direction:column;
    width:60%;
    justify-content:flex-start;
    margin-left:40px;
    &> *{
        font-family: 'Poppins', sans-serif;
        color:#fe676e;
       
    }

    @media (max-width: 843px){
        & > div {
            width:100%;
           
            align-items: center !important;
       }
    }
    @media(max-width:843px){
        margin-left:0px;
        padding-left:0px;
    }
`

const Heading=styled(Typography)`
    font-weight: 700;
    font-size: 3.5rem;
    line-height: 68px;

    @media (max-width: 843px){
        text-align:center;
        font-size: 1.75rem;
        line-height: 35px;
        font-weight:600px;
    }
    
    
`

const Bio=styled(Typography)`
    font-size:1.2rem;
    @media (max-width: 843px){
        padding-top:20px;
        width:150%;
        align-self:center;
        text-align:center;
        font-size:1rem;
        
    }
`

const PicSec=styled(Box)`
    display:flex;
    flex-direction:column;
    margin:10px;
    padding-left:55px;
    padding-top:40px;

    @media (min-width: 843px){
        align-items:center;
        
    }
    @media(max-width:843px){
        padding-left:0px;
        padding-top:0px;
        padding-bottom:20px;
    }
`
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

  const ResumeButton = styled(Button)`
    
    cursor: pointer;
    margin-top: 10px;
    width: 20rem;
    @media (max-width: 843px) {
        width: 12rem;
        align-self:center;
  }
`;
const ButtonText=styled(Typography)`
    font-family: 'Poppins', sans-serif;
    color:#a62d53 !important ;
    font-size:1rem;
    font-weight:600;
    margin:auto;
    text-align:center;

    @media(max-width:843px){
        font-size:0.9rem;
        text-align:center;
        
    }
`

const Roles=styled(Box)`
    &>div{
        font-weight: 700;
    font-size: 3.5rem;
    line-height: 68px;
    color:#a62d53;
    @media (max-width: 843px){
        text-align:center;
        font-size:1.75rem;
        line-height: 35px;
        font-weight:600px;
    }
    }
    
`

const StyledImg=styled.img`
    border-radius:50%;
    height:300px;
    width:300px;
    border:3px solid #c73866;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 1);
    object-fit:cover;
    &:hover{
        transform: scale(1.1); 
    }
    @media(max-width:843px){
        height:200px;
        width:200px;
        border:2px solid #c73866;
    }
`

function About(){
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
  
    const isMobile = windowDimension <= 843;
    return(
        
        <ThemeProvider theme={theme}>
        <Container id="about" name="about">
        {!isMobile? (
            <>
            <Intro>
                <Heading>Hi, I am </Heading>
                <Heading>Suhani Talreja</Heading>
                <Heading>I am a</Heading>
                <Roles>
                <Typewriter
                    options={{
                        strings:Data.roles,
                        autoStart:true,
                        loop:true,
                        textStyle:Roles
                    }}
                />
                </Roles>
                <Bio>
                    {Data.description}
                </Bio>
                <ResumeButton size="large" variant="contained" color="mac" href="https://docs.google.com/document/d/1JiwTGWv8_qzLhT9wqrAHSf6hkRA9N1e-iY-pU04gsFA/edit?usp=sharing"> <ButtonText>Check Resume</ButtonText></ResumeButton>
            </Intro>
            <PicSec>
                <StyledImg src={Data.picture} alt="my pic"/>
                
            </PicSec>
            </>
       
        ):(
            <>
            <PicSec>
                <StyledImg src={Data.picture} alt="my pic"/>
                
            </PicSec>
            <Intro>
                <Heading>Hi, I am </Heading>
                <Heading>Suhani Talreja</Heading>
                <Heading>I am a</Heading>
                <Roles>
                    <Typewriter
                        
                        options={{
                            strings:Data.roles,
                            autoStart:true,
                            loop:true,
                            textStyle:Roles
                        }}
                    ></Typewriter>
                </Roles>
                <Bio>
                    {Data.description}
                </Bio>
                <ResumeButton size="large" variant="contained" color="mac" href="https://docs.google.com/document/d/1JiwTGWv8_qzLhT9wqrAHSf6hkRA9N1e-iY-pU04gsFA/edit?usp=sharing"> <ButtonText>Check Resume</ButtonText></ResumeButton>
            </Intro>
            </>

        
        )}
        </Container>
        </ThemeProvider>
    )
}

export default About;