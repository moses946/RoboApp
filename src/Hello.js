import React from "react";
import "./Hello.css"

function Hello(props){
    return(
        <div className="f1 tc">
            <h1>{props.greeting}</h1>
            <div>My name is Moses.</div>
        </div>
        
    );
}

export default Hello;