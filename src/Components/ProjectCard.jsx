import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import {createTheme,ThemeProvider} from '@mui/material/styles';

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
const Card=styled.div`
    width:330px;
    height:490px;
    background-color:rgba(255, 184, 113, 0.5);
    border: 0.1px solid #fd8582;
    cursor:pointer;
    border-radius:10px;
    box-shadow:0 0 12px 4px rgba(0,0,0,0.2);
    overflow:hidden;
    transition: all 0.5s ease-in-out;
    padding:26px 20px;
    display:flex;
    flex-direction:column;
    gap:14px;

    &:hover{
        transform:translateY(-10px);
        box-shadow:0 0 12px 4px rgba(0,0,0,0.4);
        filter:brightness(1.09);
        height:530px;
        
    }
`
const Image=styled.img`
    width:100%;
    height:200px;
    border-radius:10px;
    object-fit:cover;
    box-shadow:0 0 16px 2px rgba(0,0,0,0.3);
`
const Tags=styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    gap:8px;
    margin-top:4px;
    align-items:center;
`
const Tag=styled.span`
    font-size:14px;
    font-weight:500px;
    color:#ffdca2;
    padding:2px 8px;
    border-radius:10px;
    background-color:rgba(254, 103, 110, 0.7);
`

const Details=styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    padding:0px 2px;
    gap:0px;
    
`
const Title=styled.div`
    font-size:20px;
    font-weight:600px;
    font-family: 'Poppins', sans-serif;
    color:#c73866;
    overflow:hidden;
    white-space:no-wrap;
    max-width:100%;
    text-overflow:ellipsis;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
`

const Date=styled.div`
    font-size:12px;
    font-weight:450;
    color:#c73866;
    margin-left:2px;
    @media(max-width:768px){
        font-size:10px;
    }
`
const Desc=styled.div`
    max-width:100%;
    font-size:16px;
    font-weight:400;
    color:#c73866;
    margin-top:8px;
    font-family:'Poppins', sans-serif;
    overflow:hidden;
    text-overflow:ellipsis;
    -webkit-line-clamp:4;
    -webkit-box-orient:vertical;
    display:-webkit-box;
    @media(max-width:768px){
        font-size:12px;
    }
    &:hover{
       
        -webkit-line-clamp:6;
        -webkit-box-orient:vertical;
    }
`
const ButtonSection=styled.div`
    display:flex;
    flex-direction:row;
    width:75%;
    justify-content:space-between;
    flex-wrap:wrap;
`
const Code=styled(Button)`
   font-family:'Poppins', sans-serif;
`
const Live=styled(Button)`
   font-family:'Poppins', sans-serif;
`
function ProjectCard({project}){
    return(
        <ThemeProvider theme={theme}>
            <Card>
                <Image src={project.image} />
                <Tags>
                    {project.tags.map((tag)=>(
                        <Tag key={tag}>{tag}</Tag>
                    ))}
                </Tags>
                <Details>
                    <Title>{project.title}</Title>
                    <Date>{project.date}</Date>
                    <Desc>{project.desc}</Desc>
                </Details>
                <ButtonSection>
                {project.github && (
                        <Code color="mac" variant="contained" size="small" component="a" href={project.github} target="_blank" rel="noopener noreferrer">
                            Get Code
                        </Code>
                    )}
                {project.webapp && (
                    <Live color="mac" variant="contained" size="small" component="a" href={project.webapp} target="_blank" rel="noopener noreferrer">
                        Launch App
                    </Live>
                    )}
            </ButtonSection>
            </Card>
        </ThemeProvider>
    )
}

export default ProjectCard;