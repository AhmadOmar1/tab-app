import styled from "@emotion/styled";
import { Box, Button, Theme } from "@mui/material";

interface StyledBoxProps {
  expanded: boolean;
  theme?: Theme
}

export const StyledBox = styled(Box) <StyledBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #999;
  border-radius: 50px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  width: ${(props) => (props.expanded ? "40%" : "40%")};
  min-width: ${(props) => (props.expanded ? "400px" : "400px")};
  height: auto;
  padding: ${(props) => (props.expanded ? "35px 40px" : "0")};
  position: relative;
  z-index: 11;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 6 6px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(8.5px);
`;

export const StyledForm = styled.form<StyledBoxProps>`
  display: flex;
  flex-direction: ${(props) => (props.expanded ? "column" : "row")};
  justify-content: space-between;
  align-items: center;
  padding-inline: 5px;
  gap: ${(props) => (props.expanded ? "10px" : "0")};
  flex: 1;
 
`;


export const StyledButton = styled(Button)<StyledBoxProps>`
  height: ${(props) => (props.expanded ? "50px" : "40px")};
  border-radius: ${(props) => (props.expanded ? "7px" : "50%")};
  min-width: auto;
  width: ${(props) => (props.expanded ? "80%" : "40px")};
  padding: ${(props) => (props.expanded ? "15px" : "0")};
  margin-top: ${(props) => (props.expanded ? "20px" : "0")};
  background-color: ${(props) =>  props.theme.palette.secondary.dark};
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: ${(props) => (props.expanded ? "rotate(0deg)" : "rotate(180deg)")};
  }
`;



