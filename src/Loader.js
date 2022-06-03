import React from "react";
import Rocket from "./Rocket";
import "./Loader.css"
const Loader = () => {
 
    return(
       <>
        <div className="backgroundBlur "></div>
        <div className="rocket">
            <Rocket/>
            </div>
       </>
    )

}

export default Loader;