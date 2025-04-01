import React from "react";
import { styled } from "@mui/material/styles";

interface StyledButtonProps {
  children: React.ReactNode;
}

const StyledButton: React.FC <StyledButtonProps> = ({ children }) => {
  const StyledButton = styled("button")(({theme}) => ({  
  backgroundColor: "transparent",
  border: `1px Solid ${theme.palette.primary.contrastText}`,
  color: theme.palette.primary.main,
  padding: "5px 15px",
  fontSize: "14px",
  width: "100%",
  borderRadius: "4px",
  textTransform: "none",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: theme.palette.secondary?.contrastText || "lightgray",
  }
  }));
  return (  
  <>
<StyledButton></StyledButton>
  </>
  )
};

export default StyledButton;