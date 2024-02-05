import { IconProps } from "./IconProps";

const UserIcon: React.FC<IconProps> = ({ color = 'black', height = '20', width = '20' }) => {
    return (
        <svg width={width} height={height} viewBox=" 0 0 20 20"  fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6904 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66668C5.78262 12.5 4.93478 12.8512 4.30965 13.4763C3.68453 14.1014 3.33334 14.9493 3.33334 15.8333V17.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.99999 9.16667C11.8409 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.8409 2.5 9.99999 2.5C8.15904 2.5 6.66666 3.99238 6.66666 5.83333C6.66666 7.67428 8.15904 9.16667 9.99999 9.16667Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default UserIcon