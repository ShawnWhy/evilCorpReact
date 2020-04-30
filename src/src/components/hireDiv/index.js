import React from "react";
import "./Style.css"

function HireBar(props){

    return(

        <div classNames>
            <input name ="firstName" placeholder="employeeFirstName"></input>
            <input name = "lastName" placeholder="employeeLastName"></input>
            <input name = "title" placeholder="employeePosition"></input>
            <input name = "password" placeholder="employeePassword"></input>
            <button class="hireButton" onClick={props.hire}>hire</button>




        </div>





    )
}

export default HireBar