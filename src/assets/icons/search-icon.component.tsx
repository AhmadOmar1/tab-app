import { IconProps } from "./IconProps"

const SearchIcon: React.FC<IconProps> = ({ color = 'black', height = '20', width = '20' }) => {
    return (
        <svg width={width} height={height} viewBox=" 0 0 20 20"  fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_38_103)">
                <path d="M19.6346 17.8713L15.7636 13.9987C18.6601 10.128 17.8703 4.64219 13.9996 1.74576C10.129 -1.15068 4.64317 -0.360912 1.74674 3.50973C-1.1497 7.38038 -0.359936 12.8662 3.51071 15.7626C6.61993 18.0893 10.8904 18.0893 13.9996 15.7626L17.8722 19.6352C18.3589 20.1219 19.1479 20.1219 19.6345 19.6352C20.1212 19.1486 20.1212 18.3596 19.6345 17.8729L19.6346 17.8713ZM8.78745 15.0152C5.3474 15.0152 2.55873 12.2265 2.55873 8.78647C2.55873 5.34643 5.3474 2.55775 8.78745 2.55775C12.2275 2.55775 15.0162 5.34643 15.0162 8.78647C15.0125 12.225 12.226 15.0115 8.78745 15.0152Z" fill={color} />
            </g>
            <defs>
                <clipPath id="clip0_38_103">
                    <rect width={width} height={height} fill={color} />
                </clipPath>
            </defs>
        </svg>
    )
}

export default SearchIcon