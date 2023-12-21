import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import styled from '@emotion/styled';
import { blogs } from './Utils/blogSet';
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
const BlogSection=styled.div`
    width:100%;
    max-width:1200px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    position:relative;
    gap:30px;
    flex-wrap:wrap;
    padding-top:20px;
    @media(max-width:768px){
        flex-direction:column;
        align-items:center;
    }
`
const StyledCard=styled(Card)`
    background-color:rgba(255, 184, 113, 0.5);
    border: 0.1px solid #fd8582;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width:400px;
    border-radius:10px;
    padding:8px 10px;
    justify-content:space-between;
    flex-direction:row;
    flex-wrap:wrap;
    gap:12px;
    transition:all 0.3s ease-in-out;
    overflow:hidden;
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
const BlogTitle=styled.h3`
    font-size:25px;
    padding-bottom:4px;
    color:#a62d53;
    line-height:27px;
    font-family:'Poppins', sans-serif;

    @media(max-width:768px){
        font-size:20px;
        line-height:23px;
    }
`
const BlogDesc=styled.h4`
    font-size:13px;
    padding-bottom:4px;
    color:#a62d53;
    line-height:20px;
    font-weight:400;
    font-family:'Poppins', sans-serif;
    height:130px;
    overflow:hidden;

    @media(max-width:768px){
        font-size:10px;
        line-height:17px;
    }

    &:hover{
        height:200px;
        overflow:visible;
    }
`

function Blog(){
    return (
        <ThemeProvider theme={theme}>
        <Container id='blogs' name="blogs">
            <Wrapper>
                <Title>Blogs</Title>
                <Desc>Being in the content team at a tech club in college, gave me the chance to combine two things I have keen interest in, writing and technology.</Desc>
                <BlogSection>
                    {blogs.map((blog)=>(
                        <StyledCard>
                            <CardActionArea>
                                <CardMedia 
                                component="img"
                                height="180"
                                image={blog.img}
                                />
                                <CardContent>
                                    <BlogTitle gutterBottom variant="h5" component="div">
                                        {blog.title}
                                    </BlogTitle>
                                    <BlogDesc variant="body2" color="text.secondary">
                                        {blog.desc}
                                    </BlogDesc>
                                </CardContent>
                            </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="mac" variant='contained' href={blog.link}>
                                        Read Here
                                    </Button>
                                </CardActions>
                        </StyledCard>
                    ))}

                </BlogSection>
            </Wrapper>
        </Container>
        </ThemeProvider>
    )
}

export default Blog;