import React from "react";
import "./Style.css"

function EmployeeCard(props){
return(
    
    <div className="employeeCard">
        <div className= {props.photoClass}></div>
        <div className="nameContainer">
            <div>{props.firstname} {props.lastname}</div>
            <div>{props.position}</div>
        </div>
        <button keyid={props.id} className={props.buttonClass} onClick={props.fireEmployee}>Fire</button>
    </div>
    )
} 

export default EmployeeCard;
