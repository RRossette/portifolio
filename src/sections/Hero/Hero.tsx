import { Container, Typography, Button } from "@mui/material";
import Avatar from "../../assets/images/avatar.jpg";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import EmailIcon from "@mui/icons-material/Email";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const StyledHero = styled("div")(({theme}) => ({
  backgroundColor: theme.palette.primary.contrastText,
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
        <Grid justifyContent="center" display= "flex" size={{xs:12, md:4, lg:4}}>
            <StyledImg src={Avatar} alt="Avatar" />
          </Grid>
          <Grid justifyContent="center" size={{xs:12, md:8, lg:8}} >
            <Typography color="primary" variant="h2" align="center">
              Renan Rossette
            </Typography>
            <Typography color="primary" variant="h5" align="center">
              I'm a Software Engineer
            </Typography>
            <Grid container justifyContent="center" maxWidth="lg" spacing={2}>
            <Grid justifyContent="center" display= "flex"size={{xs:12, md:6, lg:6}}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<FileDownloadIcon />}
                >
                  Download CV
                </Button>
              </Grid>
              <Grid justifyContent="center" display= "flex"size={{xs:12, md:6, lg:6}}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<EmailIcon />}
                >
                  Contact me
                </Button>
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
