import React from "react";
import { skills } from "./Utils/skillSet";
import styled from "@emotion/styled";

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
const SkillsContainer=styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    margin-top:40px; 
    justify-content:center;
    gap:30px;

    @media(max-width:768px){
        flex-directin:column;
        align-items:center;
    }
`

const Skill=styled.div`
    width:100%;
    height:300px;
    max-width:500px;
    background-color:rgba(255, 184, 113, 0.6);
    border: 0.1px solid #fd8582;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius:15px;
    padding:18px 36px;

    @media(max-width:768px){
        max-width:400px;
        padding:10px 36px;
    }

    @media(max-width:500px){
        max-width:330px;
        padding:10px 36px;
    }

`
const SkillTitle=styled.h2`
    font-weight: 700;
    font-size: 1.8rem;
    font-family: 'Poppins', sans-serif;
    color:#a62d53;
    text-align:center;
    margin-bottom:12px;
    @media(max-width:768px){
        font-weight: 650;
        font-size: 1.5rem;
    }
`

const SkillsList=styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:12px;
    margin-bottom:20px;
`
const SkillItem=styled.div`
    display:flex;
    align-items:center;
    gap:8px;
    justify-content:center;
    font-size:16px;
    color:#a62d53;
    border-radius:12px;
    border:1px solid #fe676e;
    padding:12px 16px;
    font-weight:500px;

    @media(max-width:768px){
        font-size:14px;
        padding:8px 12px;
    }

    @media(max-width:500px){
        font-size:12px;
        padding:6px 8px;
    }
`

const SkillImage=styled.img`
    width:20px;
    height:20px;
`

function Skills(){
    return(
        <Container id="skills" name="skills">
            <Wrapper>
                <Title>Skills</Title>
                <Desc>
                    Here are some of the skills on which I've worked and am still working.
                </Desc>
                <SkillsContainer>
                    {skills.map((item)=>(
                        <Skill key={item.id}>
                            <SkillTitle>{item.title}</SkillTitle>
                            <SkillsList>
                                {item.skills.map((skills)=>(
                                    <SkillItem>
                                        <SkillImage src={skills.image} />
                                        {skills.name}
                                    </SkillItem>
                                ))}
                            </SkillsList>
                        </Skill>
                    ))}
                </SkillsContainer>
            </Wrapper>
        </Container>
    )
}

export default Skills;