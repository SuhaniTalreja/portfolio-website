import styled from "@emotion/styled";
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import EduCard from "./EduCard";
import { education } from "./Utils/eduSet";
import {createTheme,ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    palette: {
      mac: {
        main: '#a62d53',
        light: '#ffdca2', 
        dark: '#fd8f52', 
        contrastText: '#a62d53', 
      },
    },
  });
const Container=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    position:relative;
    z-index:1;
    align-items:center;
`
const Wrapper=styled.div`
    max-width:1100px;
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    width:100%;
    gap:12px;
    padding:100px 0px 10px;
    @media(max-width:768px){
        width:95%;
    }
`
const Title=styled.h1`
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 68px;
    font-family: 'Poppins', sans-serif;
    color:#c73866;
    text-align:center;
    margin-top:50px;

    @media(max-width:768px){
        font-weight: 650;
        font-size: 2rem;
        line-height: 60px;
    }
`
const Desc=styled.div`
    font-size:18px;
    text-align:center;
    color:#c73866;
`
const TimelineSection=styled.div`
    width:100%;
    max-width:1000px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:30px;

    @media(max-width:768px){
        flex-directin:column;
        align-items:center;
    }
`

function Education(){
    return(
        <ThemeProvider theme={theme}>
        <Container id="education" >
            <Wrapper>
                <Title>Education</Title>
                <Desc>I am always greatful to the organizations who have embraced me to achieve greater things in life. My education has been a journey of finding my self and growing.</Desc>
                <TimelineSection>
                    <Timeline >
                        {education.map((edu,ind)=>(
                            <TimelineItem>
                            <TimelineContent sx={{py:"12px" ,px:2}}>
                                <EduCard edu={edu}/>
                            </TimelineContent>
                            <TimelineSeparator >
                                    <TimelineDot variant="outlined" color="mac"/>
                                    {ind !== education.length-1 && <TimelineConnector/>}
                                    
                            </TimelineSeparator>
                            
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
        </ThemeProvider>
    )
}

export default Education;