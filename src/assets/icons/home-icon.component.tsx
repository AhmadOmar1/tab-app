import { useTheme } from "@mui/material";
import { IconProps } from "./IconProps"

const HomeIcon:React.FC<IconProps> = ({width="17" , height="17" , color=""}) => {
    const theme = useTheme();
    color = theme.palette.primary.main;
  return <svg width={width} height={height} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clipRule="evenodd" d="M8.33333 0C7.57195 0 6.82512 0.208624 6.17396 0.603212L2.00729 3.12821C1.39457 3.49951 0.887935 4.02253 0.536321 4.64675C0.184708 5.27097 -1.19204e-05 5.9753 5.76771e-10 6.69174V11.9351C5.76771e-10 13.0401 0.438987 14.0999 1.22039 14.8813C2.00179 15.6628 3.0616 16.1017 4.16667 16.1017H12.5C13.6051 16.1017 14.6649 15.6628 15.4463 14.8813C16.2277 14.0999 16.6667 13.0401 16.6667 11.9351V6.6909C16.6665 5.97464 16.4817 5.27032 16.1301 4.64629C15.7785 4.02227 15.272 3.49942 14.6594 3.12822L10.4927 0.603219C9.84156 0.208631 9.09472 0 8.33333 0ZM7.03772 2.02859C7.42841 1.79184 7.87651 1.66667 8.33333 1.66667C8.79016 1.66667 9.23825 1.79184 9.62895 2.02859L13.7956 4.55359C14.1632 4.77631 14.4671 5.09003 14.6781 5.46444C14.889 5.8388 14.9999 6.26121 15 6.6909V11.9351C15 12.5981 14.7366 13.234 14.2678 13.7028C13.7989 14.1717 13.163 14.4351 12.5 14.4351H11.6667V11.9351C11.6667 11.051 11.3155 10.2032 10.6904 9.57805C10.0652 8.95293 9.21739 8.60174 8.33333 8.60174C7.44928 8.60174 6.60143 8.95293 5.97631 9.57805C5.35119 10.2032 5 11.051 5 11.9351V14.4351H4.16667C3.50363 14.4351 2.86774 14.1717 2.3989 13.7028C1.93006 13.234 1.66667 12.5981 1.66667 11.9351V6.69174C1.66666 6.26187 1.77749 5.83925 1.98846 5.46472C2.19943 5.09018 2.50341 4.77637 2.87104 4.55359L7.03772 2.02859ZM9.51184 10.7566C9.8244 11.0691 10 11.493 10 11.9351V14.4351H6.66667V11.9351C6.66667 11.493 6.84226 11.0691 7.15482 10.7566C7.46738 10.444 7.8913 10.2684 8.33333 10.2684C8.77536 10.2684 9.19928 10.444 9.51184 10.7566Z" fill={color} />
    </svg>
}

export default HomeIcon