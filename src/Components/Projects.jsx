import styled from "@emotion/styled";
import { projects } from "./Utils/projectSet";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

const Container=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    position:relative;
    z-index:1;
    align-items:center;
    padding:40px 0px 80px 0px;

    @media(max-width:960px){
        padding:0px;
    }
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
    padding:10px 0px 100px;
    @media(max-width:768px){
        width:90%;
    }
`
const Title=styled.h1`
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 68px;
    font-family: 'Poppins', sans-serif;
    color:#a62d53;
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
    color:#a62d53;
`
const ToggleGroup=styled.div`
    display:flex;
    border: 1.5px solid #a62d53;
    background-color:#ffb871;
    color:#a62d53;
    font-size:16px;
    border-radius:12px;
    font-weight:500px;
    margin:22px 0;

    @media(max-width:768px){
        font-size:12px;
        cursor:pointer;
        border-radius:6px;
    }
`
const ToggleButton=styled.div`
    padding:8px 18px;
    cursor:pointer;
    border-radius:6px;

    &:hover{
        background-color:#e6955c;
    }
    @media(max-width:768px){
        padding:6px 8px;
        border-radius:4px;
    }
`
const Divider=styled.div`
    width:1.5px;
    background-color:#a62d53;
`

const CardContainer=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    gap:20px;
`

function Projects(){
    const[toggle,setToggle]=useState("all");
    return (
        <Container id="projects" name="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>Following is the reflection of my learnings curated to showcase my capabilities aka my projects.</Desc>

                <ToggleGroup>
                    {toggle==="all" ? (
                        <ToggleButton active value="all" onClick={()=> setToggle("all")}>ALL</ToggleButton>
                    ):(
                        <ToggleButton value="all" onClick={()=> setToggle("all")}>ALL</ToggleButton>
                    )}
                    <Divider />
                    {toggle==="react" ? (
                        <ToggleButton active onClick={()=> setToggle("react")}>REACT APPS</ToggleButton>
                    ):(
                        <ToggleButton  onClick={()=> setToggle("react")}>REACT APPS</ToggleButton>
                    )}
                    <Divider />
                    {toggle==="javascript" ? (
                        <ToggleButton active onClick={()=> setToggle("javascript")}>JAVASCRIPT APPS</ToggleButton>
                    ):(
                        <ToggleButton  onClick={()=> setToggle("javascript")}>JAVASCRIPT APPS</ToggleButton>
                    )}
                    <Divider />
                    {toggle==="misc" ? (
                        <ToggleButton active onClick={()=> setToggle("misc")}>MISCELLANEOUS</ToggleButton>
                    ):(
                        <ToggleButton  onClick={()=> setToggle("misc")}>MISCELLANEOUS</ToggleButton>
                    )}
                </ToggleGroup>

                <CardContainer>
                        {toggle === "all" && projects.map((project) => <ProjectCard project={project}/>)}

                        {projects.filter((item)=>item.category === toggle).map((project)=>(
                            <ProjectCard project={project} />
                        ))}
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default Projects;