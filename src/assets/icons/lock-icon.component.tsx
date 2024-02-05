import { IconProps } from "./IconProps"

const LockIcon: React.FC<IconProps> = ({ color = 'black', height = '20', width = '20' }) => {
    return (
        <svg width={width} height={height}   fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8333 9.16669H4.16667C3.24619 9.16669 2.5 9.91288 2.5 10.8334V16.6667C2.5 17.5872 3.24619 18.3334 4.16667 18.3334H15.8333C16.7538 18.3334 17.5 17.5872 17.5 16.6667V10.8334C17.5 9.91288 16.7538 9.16669 15.8333 9.16669Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.83334 9.16669V5.83335C5.83334 4.72828 6.27233 3.66848 7.05373 2.88708C7.83513 2.10567 8.89494 1.66669 10 1.66669C11.1051 1.66669 12.1649 2.10567 12.9463 2.88708C13.7277 3.66848 14.1667 4.72828 14.1667 5.83335V9.16669" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default LockIcon