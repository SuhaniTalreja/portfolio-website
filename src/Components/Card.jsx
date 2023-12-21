import styled from "@emotion/styled";
import React from "react";

const Container=styled.div`
    background-color:rgba(255, 184, 113, 0.5);
    border: 0.1px solid #fd8582;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width:650px;
    border-radius:10px;
    padding:12px 16px;
    justify-content:space-between;
    position:relative;
    overflow:hidden;
    flex-direction:column;
    gap:12px;
    transition:all 0.3s ease-in-out;

    &:hover{
        border: 1.5px solid #fd8582;
        transform:translateY(-5px);
    }

    @media(max-width:770px){
        padding:10px;
        gap:8px;
        width:300px;
    }
`
const Top=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    width:100%;
    gap:12px;
`
const Logo=styled.img`
    height:60px;
    background-color:#d3d1d8;
    border-radius:10px;
    margin-top:4px;

    @media(max-width:768px){
        height:40px;
    }
`
const Body=styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`
const Role=styled.div`
    font-size:18px;
    font-weight:600;
    color:#c73866;
    font-family:'Poppins', sans-serif;
    @media(max-width:768px){
        font-size:16px;
    }
`
const Duration=styled.div`
    font-size:12px;
    font-weight:400;
    color:#c73866;

    @media(max-width:768px){
        font-size:10px;
    }
`
const Company=styled.div`
    font-size:16px;
    font-weight:500;
    color:#c73866;

    @media(max-width:768px){
        font-size:12px;
    }
`
const Desc=styled.div`
    width:100%;
    font-size:165x;
    font-weight:400;
    color:#c73866;
    margin-top:4px;
    margin-bottom:10px;
    font-family:'Poppins', sans-serif;
    @media(max-width:768px){
        font-size:12px;
    }
`

const SkillsUsed=styled.div`
    width:100%;
    font-size:165x;
    font-weight:400;
    color:#c73866;
    margin-top:4px;
    margin-bottom:10px;
    font-family:'Poppins', sans-serif;
    @media(max-width:768px){
        font-size:12px;
    }
`

function Card({exp}){
    return(
        
        <Container>
            <Top>
                <Logo src={exp.img} />
                <Body>
                    <Role>{exp.role}</Role>
                    <Company>{exp.company}</Company>
                    <Duration>{exp.date}</Duration>
                </Body>
            </Top>
            <Desc>{exp.desc}</Desc>
            <SkillsUsed>Skills :{exp.skills}</SkillsUsed>
        </Container>
        
    )
}

export default Card;