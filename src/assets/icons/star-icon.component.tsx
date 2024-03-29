import { useTheme } from "@mui/material";
import { IconProps } from "./IconProps"

const StarIcon:React.FC<IconProps> = ({width='17',height='17',color=''}) => {
    const theme = useTheme();
    color = theme.palette.primary.main;
    return <svg width={width} height={height} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.3311 4.60081H10.5563C11.5137 4.60081 11.9238 5.81667 11.1619 6.39654L10.8221 6.65518C9.81923 7.41852 9.40038 8.72728 9.77373 9.93105L9.86907 10.2385C10.1562 11.1643 9.08588 11.9131 8.31455 11.326C7.24246 10.51 5.75754 10.51 4.68545 11.326C3.91412 11.9131 2.84378 11.1643 3.13093 10.2385L3.22627 9.93105C3.59962 8.72728 3.18077 7.41852 2.17789 6.65518L1.83808 6.39654C1.07624 5.81667 1.48631 4.60081 2.44374 4.60081H2.66892C3.98735 4.60081 5.148 3.73492 5.53624 2.48314C5.82728 1.54478 7.17272 1.54478 7.46376 2.48314C7.852 3.73492 9.01264 4.60081 10.3311 4.60081Z" stroke={color} strokeWidth="1" />
    </svg>
}

export default StarIcon