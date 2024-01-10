import { FC } from "react";

import Errorimg from '/assets/404.png'

interface ErrorProps {
    
}
 
const Error: FC<ErrorProps> = () => {
    return ( <div className="flex flex-col justify-center items-center h-full">
        <img src={Errorimg} alt="" />
    </div> );
}
 
export default Error;