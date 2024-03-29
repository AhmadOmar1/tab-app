import React from 'react'
import { IconProps } from './IconProps'
import { useTheme } from '@mui/material'

const PriceICon: React.FC<IconProps> = ({ width=17, height=17, color='' }) => {
    const theme = useTheme();
    color = theme.palette.primary.main;
    return <svg width={width} height={height} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M11.3333 0C10.9797 0 10.6406 0.140475 10.3905 0.390524C10.1405 0.640574 10 0.979712 10 1.33333V5H6.33333C5.97971 5 5.64057 5.14047 5.39052 5.39052C5.14047 5.64057 5 5.97971 5 6.33333V10.8333H1.33333C0.979712 10.8333 0.640574 10.9738 0.390524 11.2239C0.140475 11.4739 0 11.813 0 12.1667V15.3333C0 15.6869 0.140475 16.0261 0.390524 16.2761C0.640574 16.5262 0.979712 16.6667 1.33333 16.6667H15.3333C15.6869 16.6667 16.0261 16.5262 16.2761 16.2761C16.5262 16.0261 16.6667 15.6869 16.6667 15.3333V1.33333C16.6667 0.979712 16.5262 0.640574 16.2761 0.390524C16.0261 0.140475 15.6869 0 15.3333 0H11.3333ZM6.66667 6.66667H10V15H6.66667V6.66667ZM15 15H11.6667V1.66667H15V15ZM5 12.5V15H1.66667V12.5H5Z" fill={color} />
    </svg>
}

export default PriceICon