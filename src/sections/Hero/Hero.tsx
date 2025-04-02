import { Container, Typography, Button } from "@mui/material";
import Avatar from "../../assets/images/avatar.jpg";
import DownloadIcon from "@mui/icons-material/download";
import EmailIcon from "@mui/icons-material/Email";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import StyledButton from "../../components/StyledButton/StyledButton";

const StyledHero = styled("div")(({theme}) => ({
  backgroundColor: theme.palette.primary.dark,
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

const StyledImg = styled("img")(() => ({
  width: "80%",
  borderRadius: "50%"
}));

const Hero = () => {
  return (
  <>
    <Container maxWidth="lg">
      <StyledHero>
        <Grid container spacing={2}>
        <Grid justifyContent="center" display= "flex" size={{xs:12, md:8, lg:6}}>
            <StyledImg src={Avatar} alt="Avatar" />
          </Grid>
          <Grid justifyContent="center" size={{xs:12, md:4, lg:6}} container spacing={2} >
            <Typography color="primary" variant="h1" align="center">
              Renan Rossette
            </Typography>
            <Typography color="primary" variant="h4" align="center">
              I'm a Software Engineer
            </Typography>
            <Grid container justifyContent="center" maxWidth="lg" spacing={2}>
            <Grid justifyContent="center" display= "flex"size={{xs:12, md:12, lg:12}}spacing={1}>
                <StyledButton
                >
                  <DownloadIcon />
                  <Typography>Download CV</Typography>
                </StyledButton>
              </Grid>
              <Grid justifyContent="center" display= "flex"size={{xs:12, md:6, lg:6}}spacing={1}>
                <StyledButton
                >
                  <EmailIcon />
                  <Typography>Contact me</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </StyledHero>
    </Container>
</>
  );
};

export default Hero;
