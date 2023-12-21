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
  width:100%;
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
