import React from "react";
const To_do = (props) =>{
    const deleteItems = () =>{
      
    };
    return(
        <>
        <div className="list_style">
        <li><button style={{backgroundColor:"Red",marginRight:"10px",cursor:"pointer"}} onClick={() => {
            props.onSelect(props.id);
        }}> X </button>{props.text}</li>
        </div>
        </>
    );
    
};
export default To_do;