import React from "react";



function SideBar(props){


    return(
<div>
    <div>
        hello {props.meFirstName} {props.meLastName}, our wonderful {props.meTitle}
    </div>
    <div>
        <input 
        type="text"
         name="firstName"
         placeholder="firstame"
         onChange={props.handleInputchange}
         />
        
        <input 
        type="text"
         name="lastName"
         placeholder="lastname"
         onChange={props.handleInputchange}
          />
          </div>
          <input 
        type="text"
         name="password"
         placeholder="password"
         onChange={props.handleInputChange}
          />
          <button
          onClick = {props.handleSubmit}
          
          ></button>
          {props.children}

         
        

</div>


    )
};

export default SideBar;