import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material"
type ButtonProps = {
    text: string;
    width?: number;
    height?: number;
} & MuiButtonProps;

const Button: React.FC<ButtonProps> = (props, { variant = "outlined", height = 45, width = 400 }) => {
    return (
        <MuiButton variant={variant} {...props} sx={{ height: height, width: width }}>{props.text}</MuiButton>
    );
};

export default Button

