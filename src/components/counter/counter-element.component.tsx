import { Box } from "@mui/material";
import { QuantityInput } from "../common/quantity-Input/quantityInput.component";
import style from './counter.module.css'
interface QuantityInputProps {
    label: string;
    value: number;
    min?: number;
    max?: number;
}
export const Counter: React.FC<QuantityInputProps> = ({ label, value , min , max}) => {
    return (
        <Box className={style.counterList}>
            <div>{label}</div>
            <QuantityInput min={min} max={max} value={value}  aria-label={`${label} Quantity Input`} />
        </Box>
    );
}