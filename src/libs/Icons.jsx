export default function Icons(props) {
    switch (props.icon) {
        case 'Circle' :
            return <Circle className={props.className} style={props.style} />
        case 'Ellipse' : 
            return <Ellipse className={props.className} style={props.style} />
        case 'Square' :
            return <Square className={props.className} style={props.style} />
        case 'Rectangle' : 
            return <Rectangle className={props.className} style={props.style} />
        case 'Triangle' :
            return <Triangle className={props.className} style={props.style} />
        case 'Rhombus' : 
            return <Rhombus className={props.className} style={props.style} />
        case 'Pentagon' :
            return <Pentagon className={props.className} style={props.style} />
        case 'El' : 
            return <El className={props.className} style={props.style} />
        case 'Pentagon' :
            return <Pentagon className={props.className} style={props.style} />
        case 'Shape' : 
            return <Shape className={props.className} style={props.style} />
    }
}

export const Circle = (props) => {
    return (
        <svg className={props.className} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" style={props.style}>
            <circle r="10" transform="matrix(0 1 1 0 13 13)" stroke="currentColor" ></circle>
        </svg>
    )
}

export const Ellipse = (props) => {
    return (
        <svg className={props.className} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" style={props.style}>
            <path d="M25 13C25 14.3888 23.9392 15.8734 21.7183 17.0693C19.5381 18.2432 16.4575 19 13 19C9.54251 19 6.46192 18.2432 4.28171 17.0693C2.06077 15.8734 1 14.3888 1 13C1 11.6112 2.06077 10.1266 4.28171 8.93072C6.46192 7.75676 9.54251 7 13 7C16.4575 7 19.5381 7.75676 21.7183 8.93072C23.9392 10.1266 25 11.6112 25 13Z" stroke="currentColor"></path>
        </svg>
    )
}

export const Square = (props) => {
    return (
        <svg className={props.className} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" style={props.style}>
            <mask id="path-1-inside-1_4321_220649" fill="white"><rect x="3" y="3" width="20" height="20" rx="1"></rect></mask><rect x="3" y="3" width="20" height="20" rx="1" stroke="currentColor" mask="url(#path-1-inside-1_4321_220649)"></rect>
        </svg>
    )
}

export const Rectangle = (props) => {
    return (
        <svg className={props.className} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" style={props.style}>
            <mask id="path-1-inside-1_4321_220667" fill="white"><rect y="5" width="26" height="16" rx="1"></rect></mask><rect y="5" width="26" height="16" rx="1" stroke="currentColor" mask="url(#path-1-inside-1_4321_220667)"></rect>
        </svg>
    )
}

export const Triangle = (props) => {
    return (
        <svg className={props.className} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" style={props.style}>
            <path d="M13 2.09959L24.3211 23H1.67895L13 2.09959Z" stroke="currentColor" stroke-linecap="round"></path>
        </svg>
    )
}

export const Rhombus = (props) => {
    return (
        <svg className={props.className} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" style={props.style}>
            <rect width="26" height="26" fill="none"></rect><rect x="13" y="1" width="16.9706" height="16.9706" rx="1" transform="rotate(45 13 1)" stroke="currentColor" ></rect>
        </svg>
    )
}

export const Pentagon = (props) => {
    return (
        <svg className={props.className} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" style={props.style}>
            <path d="M13 2.24914L23.8467 10.3686L19.8902 24H6.1098L2.15326 10.3686L13 2.24914Z" stroke="currentColor"></path>
        </svg>
    )
}

export const Star = (props) => {
    return (
        <svg className={props.className} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" style={props.style}>
            <path d="M12.0671 2.41535C12.3965 1.56239 13.6034 1.56239 13.9328 2.41535L16.4385 8.90319L23.1062 9.47886C23.9719 9.5536 24.3369 10.621 23.6982 11.2102L18.5636 15.9468L20.1083 22.9203C20.3024 23.7969 19.3325 24.4654 18.5824 23.972L13 20.3L7.41756 23.972C6.66743 24.4654 5.6975 23.7969 5.89167 22.9203L7.43628 15.9468L2.30171 11.2102C1.663 10.621 2.02799 9.5536 2.89374 9.47886L9.56142 8.90319L12.0671 2.41535Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    )
}

export const El = (props) => {
    return (
        <svg className={props.className} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" style={props.style}>
            <path d="M6 6V22 m0,1 H21" stroke="currentColor" stroke-linecap="round"></path>
        </svg>
    )
}

export const Shape = (props) => {
    return (
        <svg className={props.className} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" style={props.style}>
            <path d="M8.95286 5.91456L8.93053 5.90918L8.90797 5.90484C7.44628 5.62346 6.25112 5.62908 5.36902 6.06848C4.36955 6.56634 4.01542 7.48083 3.96606 8.35629C3.91974 9.17764 4.12537 10.0873 4.34753 10.8929C4.44712 11.254 4.55789 11.6201 4.66343 11.969C4.67885 12.0199 4.69415 12.0705 4.70929 12.1207C4.83014 12.5209 4.94138 12.8956 5.03101 13.2471C5.09875 13.5127 5.05172 13.702 4.85354 13.9577C4.60728 14.2755 4.20933 14.5834 3.63778 15.0135C3.60443 15.0386 3.57034 15.0641 3.5356 15.0902C2.53866 15.8379 1 16.9918 1 19C1 20.6932 1.49313 22.0134 2.50963 22.8844C3.49613 23.7297 4.8027 24.0001 6.11181 24.0001C7.75916 24 8.8683 22.9488 9.6027 22.2004C9.70693 22.0942 9.80233 21.9954 9.89136 21.9031C10.1533 21.6317 10.3601 21.4174 10.5744 21.2411C10.7573 21.0907 10.8714 21.0338 10.9362 21.0125C11.0015 21.0521 11.0961 21.1208 11.2281 21.2324C11.4114 21.3874 11.5801 21.5467 11.7771 21.7327C11.935 21.8818 12.1109 22.048 12.3272 22.2428C13.1603 22.9937 14.4139 24 16 24C18.1195 24 19.5557 23.0937 20.3688 21.882C21.1383 20.7354 21.3276 19.3394 21.0455 18.3485C21.0362 18.3156 21.0261 18.2791 21.0151 18.2393C20.8648 17.694 20.5422 16.5239 19.5458 15.6368C20.1874 15.5277 21.2405 15.3103 22.2287 14.8544C23.5321 14.2531 25 13.0945 25 11.0001C25 10.0895 24.752 9.03286 24.1897 8.17268C23.6093 7.28484 22.654 6.56462 21.3226 6.56462C20.3158 6.56462 19.3235 6.91248 18.6814 7.13758C18.6611 7.14469 18.6411 7.15169 18.6215 7.15854C18.579 5.91276 18.4266 4.78622 18.0262 3.90926C17.7694 3.34679 17.3944 2.84895 16.8525 2.49951C16.3106 2.15006 15.6807 1.99997 15 2C13.0037 2.0001 11.6824 2.7939 10.8569 3.73211C10.1271 4.56156 9.82424 5.45559 9.71384 5.88286C9.68693 5.94245 9.66885 5.98081 9.65444 6.00843C9.64099 6.00949 9.6247 6.01032 9.60527 6.01063C9.48436 6.0125 9.27943 5.99313 8.95286 5.91456ZM10.8787 20.982C10.8787 20.9819 10.8801 20.9824 10.8829 20.9836C10.8802 20.9827 10.8788 20.9821 10.8787 20.982ZM18.6857 15.7622C18.6856 15.7622 18.687 15.7614 18.6903 15.7599C18.6874 15.7615 18.6858 15.7623 18.6857 15.7622ZM9.70742 6.00058C9.70743 6.0006 9.70686 6.0008 9.70564 6.00112L9.70742 6.00058Z" stroke="currentColor" ></path>
        </svg>
    )
}

