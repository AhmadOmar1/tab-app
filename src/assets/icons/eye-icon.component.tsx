import React from 'react'
import { IconProps } from './IconProps'

const EyeIcon: React.FC<IconProps> = ({ width = '14', height = '8', color = '#999' }) => {
    return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 14 8" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.666657 1.50005C0.666408 1.2582 0.753817 1.02446 0.912691 0.842111C1.07157 0.659765 1.29114 0.541174 1.53075 0.508305C1.77035 0.475435 2.01375 0.530514 2.21586 0.66334C2.41798 0.796166 2.5651 0.997738 2.62999 1.23072C3.92799 5.56539 10.0687 5.56605 11.3693 1.23405C11.4059 1.10736 11.4671 0.989142 11.5495 0.886209C11.632 0.783276 11.7339 0.69766 11.8495 0.634287C11.9652 0.570915 12.0922 0.531038 12.2233 0.516952C12.3544 0.502866 12.487 0.514848 12.6135 0.55221C12.7399 0.589571 12.8578 0.651574 12.9602 0.73465C13.0626 0.817726 13.1475 0.920234 13.2102 1.03627C13.2728 1.15231 13.3118 1.27959 13.3251 1.41079C13.3383 1.54199 13.3255 1.6745 13.2873 1.80072C13.0595 2.57911 12.6929 3.30995 12.2053 3.95805L12.8453 4.59805C12.9408 4.69035 13.0169 4.80073 13.0693 4.92275C13.1216 5.04478 13.1491 5.17602 13.1502 5.30879C13.1513 5.44157 13.126 5.57324 13.0756 5.69611C13.0253 5.81899 12.951 5.9306 12.857 6.02445C12.7631 6.1183 12.6514 6.1925 12.5285 6.24272C12.4056 6.29294 12.2739 6.31818 12.1411 6.31697C12.0083 6.31575 11.8771 6.28811 11.7551 6.23564C11.6332 6.18317 11.5229 6.10694 11.4307 6.01139L10.7573 5.33805C10.4073 5.57772 10.0344 5.78206 9.64399 5.94805L9.80599 6.55205C9.86744 6.80576 9.82725 7.07345 9.694 7.29793C9.56075 7.5224 9.345 7.68587 9.09284 7.75341C8.84068 7.82096 8.5721 7.78722 8.34449 7.65941C8.11687 7.5316 7.94825 7.31985 7.87466 7.06939L7.70732 6.44605C7.23732 6.49472 6.76266 6.49472 6.29266 6.44605L6.12599 7.06939C6.05739 7.32559 5.88982 7.54404 5.66015 7.67669C5.43048 7.80934 5.15752 7.84532 4.90132 7.77672C4.64512 7.70812 4.42667 7.54055 4.29402 7.31088C4.16137 7.08121 4.12539 6.80825 4.19399 6.55205L4.35532 5.94739C3.96519 5.78159 3.59247 5.57748 3.24266 5.33805L2.56932 6.01139C2.47712 6.10694 2.36681 6.18317 2.24483 6.23564C2.12285 6.28811 1.99165 6.31575 1.85887 6.31697C1.72609 6.31818 1.5944 6.29294 1.47148 6.24272C1.34856 6.1925 1.23688 6.1183 1.14294 6.02445C1.049 5.9306 0.974697 5.81899 0.924358 5.69611C0.874019 5.57324 0.848656 5.44157 0.849746 5.30879C0.850837 5.17602 0.878361 5.04478 0.930711 4.92275C0.983062 4.80073 1.05919 4.69035 1.15466 4.59805L1.79466 3.95805C1.30816 3.31102 0.942313 2.58157 0.714657 1.80472C0.682998 1.70626 0.666805 1.60348 0.666657 1.50005Z" fill={color} />
    </svg>
}

export default EyeIcon