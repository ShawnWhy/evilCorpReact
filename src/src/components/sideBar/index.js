import React from "react";
import "./Style.css"



function SideBar(props){


    return(
<div >
    <div>
        hello {props.meFirstname} {props.meLastname}, our wonderful {props.mePosition}
    </div>
    <div>
        <input 
        type="text"
         name="firstname"
         placeholder="firstname"
         onChange={props.handleInputChange}
         />
        
        <input 
        type="text"
         name="lastname"
         placeholder="lastname"
         onChange={props.handleInputChange}
          />
          
          <input 
        type="text"
         name="password"
         placeholder="password"
         onChange={props.handleInputChange}
          />
        <input 
        type="text"
         name="position"
         placeholder="position"
         onChange={props.handleInputChange}
          />
          </div>
          <button className="loginButton"
          onClick = {props.handleLogin}>
          
          login</button>
           <button className={"loginButton "+ (props.mePosition==="manager"? "managerHire":"employeeHire")}
          onClick = {props.handleHire}> hire</button>
          <div className="smallText">employee Information</div>
          <div className="smallText">{props.loginfirstname},{props.loginlastname},{props.loginPosition}</div>

          <div className={props.alertbackgroundColor+" smallText"}>{props.alertmessage}</div>
</div>
)};

export default SideBar;