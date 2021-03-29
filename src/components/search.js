import React from "react"
// import { robots } from "./robots";
import "./search.css"

const Searchbox = ({searchfield, searchchange}) =>{
    return(
        <div className="pa2">
            <input
			 type="search" 
			 placeholder="search robots" 
			 className=" moses pa3 ba b--green bg-lightest-blue" 
			 onChange={searchchange}/>
        </div>
    );
};

export default Searchbox;