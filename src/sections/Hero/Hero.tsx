import { styled } from "@mui/material"
import Avatar from "../../assets/images/avatar.jpg"

    
const Hero = () => {

        const StyledHero = styled("div")(() => ({
            BackgrouundColor: "black"
        }))

        const StyledImg = styled("img")(() => ({
            width: "30%",
            borderRadius: "50%"
        }))


    return(
        <>

        <StyledHero> 
        Olá
            
            <StyledImg src={Avatar}/>
        </StyledHero> </>
    
    )   

}

  
export default Hero
  