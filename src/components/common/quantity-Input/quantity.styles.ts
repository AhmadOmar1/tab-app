import { Typography, styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export const StyledTypography = styled(Typography)(
    `
    display: flex;
    justify-content: center;
    width: 50px;
    border-radius: 8px;
    border: 1px solid ;
    box-shadow: 0px 1px 4px 3px ${'rgba(0,0,0, 0.5)'};
    `,
  );
  
  
  export const StyledRemoveIcon = styled(RemoveIcon)(
    ({ theme }) => `
    border: 1px solid ${theme.palette.primary.main};
    border-radius: 50% ;
    font-size: 20px;
  
    `,
  );
  
  
  export const StyledAddIcon = styled(AddIcon)(
    ({ theme }) => `
    border: 1px solid ${theme.palette.primary.main};
    border-radius: 50% ;
    font-size: 20px;
    `,
  );
  
  