import { Container, Typography, Grid } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import { styled } from "@mui/material/styles";
import Avatar from "../../assets/images/avatar.jpg";
import StyledButton from "../../components/StyledButton/StyledButton";
import AnimatedBackground from "../../components/AnimatedBackground";
import { useRef } from "react";

const HeroContainer = styled("div")(({ theme }) => ({
  position: "relative",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: theme.palette.primary.contrastText,
}));

const StyledImg = styled("img")(() => ({
  width: "80%",
  borderRadius: "50%",
  maxWidth: "250px",
  border: "5px solid rgba(255, 255, 255, 0.3)",
}));

const Hero = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <AnimatedBackground heroRef={heroRef} />
      <HeroContainer ref={heroRef}>
        <Container>
          <Grid container spacing={3} justifyContent="center">
            <Grid size={{xs:12, md:8}} display="flex" justifyContent="center">
              <StyledImg src={Avatar} alt="Avatar" />
            </Grid>

            {/* Texto */}
            <Grid size={{xs:12, md:8}}>
              <Typography variant="h2" color="inherit">
                Renan Rossette
              </Typography>
              <Typography variant="h5" color="inherit" sx={{ opacity: 0.8 }}>
                I'm a Software Engineer
              </Typography>
              <Grid container spacing={2} justifyContent="center" mt={3}>
                <Grid>
                  <StyledButton>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid>
                  <StyledButton>
                    <EmailIcon />
                    <Typography>Contact Me</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </HeroContainer>
    </>
  );
};

export default Hero;
