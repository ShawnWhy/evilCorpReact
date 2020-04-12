import React from "react";

function EmployeeCard(props){
return(

    <div >
        <div className= {props.photoClass}>
              

        </div>
        <div>{props.firstName} , {props.lastName}</div>
        <div>{props.position}</div>

        </div>
)
} 

export default EmployeeCard;
