import React from "react"
import "./scroll.css"

const Scroll = (props)=>{
    return (
        <div className="example" style={{overflowY: 'scroll', borderTop:"3px solid black", height:"500px"}}>
            {props.children}
        </div>
    
    )
} 

export default Scroll;