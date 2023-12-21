import styled from "@emotion/styled";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

const Container=styled.div`
    height:80vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    position:relative;
    z-index:1;
    align-items:center;
`
const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    width:100%;
    gap:15px;
    
`

const Name=styled.h3`
    padding-top:60px;
    font-size:18px;
    font-weight:650;
    font-family: 'Poppins', sans-serif;
    color:#c73866;
    text-align:center;

    @media(max-width:768px){
        font-weight: 550;
        font-size: 15px;
    }
`
const Trademark=styled.h4`
    font-size:14px;
    font-weight:400;
    font-family: 'Poppins', sans-serif;
    color:#c73866;
    text-align:center;

    @media(max-width:768px){
        font-size: 12px;
    }
`
const Socials=styled.div`
    display:flex;
    width:30%;
    justify-content:space-around;
    align-items:center;
    padding:14px 20px;

    @media(max-width:500px){
        width:50%;
    }
`
const SocialLink = styled.a`
    color: #c73866;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        color: #1e88e5; 
    }
`;

function Footer(){
    return(
    <Container>
        <Wrapper>
            <Name>Suhani Talreja</Name>
            <Socials>
                <SocialLink href="https://www.linkedin.com/in/suhani-talreja-923398259/"><LinkedInIcon /></SocialLink>
                <SocialLink href="mailto:suhani.talreja.29@gmail.com" ><GoogleIcon /></SocialLink>
                <SocialLink href="https://www.instagram.com/suhahahani?igshid=NGVhN2U2NjQ0Yg==" ><InstagramIcon /></SocialLink>
                <SocialLink href="https://github.com/SuhaniTalreja" ><GitHubIcon /></SocialLink>
            </Socials>
            <Trademark>Made with blood sweat and tears.</Trademark>
        </Wrapper>
    </Container>
    )
}

export default Footer;