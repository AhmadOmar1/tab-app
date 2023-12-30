// SearchField.styles.js
import styled from "@emotion/styled";
import { Box } from "@mui/material";

interface StyledBoxProps {
    expanded: boolean;
  }
export const StyledBox =  styled(Box)<StyledBoxProps>`
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

