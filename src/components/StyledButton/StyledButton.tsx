import React from "react";
import { styled } from "@mui/material/styles";

interface StyledButtonProps {
  children: React.ReactNode;
}

const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {
  const StyledButton = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    borderRadius: "10px",
    border: `2px solid ${theme.palette.primary.contrastText}`,
    color: theme.palette.primary.contrastText,
    fontcolor: theme.palette.secondary.dark,
    justifyContent: "center",
    alignItems: "center",
    minWidth: "200px",  // Define um tamanho mínimo
    width: "15vw",  // 20% da largura da tela
    height: "auto",  // Altura ajustável automaticamente
    padding: "5px 15px",
    gap:"10px",
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: theme.palette.secondary?.light,
    },
  }));

  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
};

export default StyledButton;
