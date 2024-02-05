import React from 'react'
import { IconProps } from './IconProps'

const DateIcon: React.FC<IconProps> = ({ width = '20', height = '21', color = '#999' }) => {
    return <svg width={width} height={height} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.5 0C6.05228 0 6.5 0.447715 6.5 1V2H13.5V1C13.5 0.447715 13.9477 0 14.5 0C15.0523 0 15.5 0.447715 15.5 1V2.02469C18.0267 2.27555 20 4.40733 20 7V16C20 18.7614 17.7614 21 15 21H5C2.23858 21 0 18.7614 0 16V7C0 4.40733 1.97334 2.27555 4.5 2.02469V1C4.5 0.447715 4.94772 0 5.5 0ZM2.17071 6H17.8293C17.4175 4.83481 16.3062 4 15 4H5C3.69378 4 2.58254 4.83481 2.17071 6ZM18 8H2V16C2 17.6569 3.34315 19 5 19H15C16.6569 19 18 17.6569 18 16V8Z" fill={color} />
    </svg>
}

export default DateIcon