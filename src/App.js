import './App.css';
import 'typeface-poppins';
import styled from '@emotion/styled';
import Navbar from './Components/Navbar'; 
import { Box } from '@mui/material';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Blog from './Components/Blog';
import Projects from './Components/Projects';
import Footer from './Components/Footer';


  const StyledComponent = styled(Box)`
    font-family: 'Poppins';
    width: 100%;
    height: 100%;
    margin: 0;
    background: linear-gradient(to bottom, rgba(253, 143, 82, 0.5), rgba(255, 184, 113, 0.5), rgba(255, 220, 162, 0.5));
`

function App() {
  return (
    <StyledComponent>
      <Navbar />
      <About id="about"/>
      <Skills />
      <Experience />
      <Projects />
      <Blog />
      <Education />
      <Footer />
    </StyledComponent>
  );
}

export default App;
