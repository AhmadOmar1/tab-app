import { Box, IconButton, Typography } from "@mui/material";
import { StyledAddIcon, StyledRemoveIcon, StyledTypography } from "./quantity.styles";
type QuantityInputProps = {
  label?: string;
  quantity: number;
  setQuantity: (quantity: number) => void;
  minValue?: number;
  maxValue?: number;
};

export const QuantityInput = ({
  label,
  quantity,
  setQuantity,
  minValue = 1,
  maxValue = 10,

}: QuantityInputProps) => {
  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity - 1);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography>{label}</Typography>

      <Box display="flex" alignItems="center">
        <IconButton
          aria-label="decrease"
          onClick={handleDecrease}
          disabled={quantity === minValue}
        >
          <StyledRemoveIcon />
        </IconButton>
        <StyledTypography >{quantity}</StyledTypography>
        <IconButton aria-label="increase" onClick={handleIncrease} disabled={quantity === maxValue}
        >
          <StyledAddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

