/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import API from "../../util/API";
import EmployeeCard from "../employee card/index"
import  SideBar from "../sideBar/index";
import  "./style.css"


function EmployeeContainer() {
  // Setting our component's initial state
  const [employees, setEmployees] = useState([


  {firstName:"shiawn",lastName:"Yu",password:"password",race:"robot",position:"manager"},
  {firstName:"shit",lastName:"ass",password:"password",race:"robot",position:"manager"},
  {firstName:"boot",lastName:"crap",password:"password",race:"robot",position:"manager"},



  ])
  const [login, setLogin] = useState({
    firstName: "",
    lastName:"",
    password:"",
  })
  const [me, setMe] = useState({
    fistName:"Puny",
    lastName:"human",
    title:"dumbass"


  })

  const[alert, setAlert] = useState({
    backgorundColor:"",
    message:""

  })

  // Load all books and store them with setBooks
  useEffect(() => {
   loadEmployees()
  }, [me])

 

  // Loads all books and sets them to books
  function loadEmployees() {
    API.getAllEmployees()
      .then(res => {
        var employeeList = res.data
        var newEmployeeList = [];
        if(employeeList.length>0){
          switch (me.title){
            case "manager":{
              employeeList.forEach(person=> {
                var employee={
                  _id:person._id,
                  firstName:person.firstName,
                  lastName:person.lastName,
                  imageClass:`${person.race}Photo`,
                  position:person.position
                }
                newEmployeeList.push(employee);}
                )}

            break;
            default:{
              employeeList.forEach(person=> {
                var employee={
                  _id:person._id,
                  firstName:person.firstName,
                  lastName:person.lastName,
                  imageClass:"humanPhoto",
                  position:person.position
                }
                newEmployeeList.push(employee);}
                )}
              }
          }   setEmployees(newEmployeeList)

      })
  
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function fireEmployee(id) {
    API.employee(id)
      .then(res => loadEmployees())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setLogin({...login, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleSubmit(event) {
    event.preventDefault();
    if (login.firstName && login.lastName && login.password) {
      API.getEmployee({
        firstName: login.fistName,
        lastName: login.lastName,
        password: login.password
      })
      .then((data)=> setMe({
        fistName:data.fistName,
        lastName:data.lastName,




      }))
        .then(() => setLogin({
          firstName: "",
          lastName: "",
          password: ""
        }))
        .then(() => loadEmployees())
        .catch(err => 
          setAlert({
            backgorundColor:"red",
            message:"can't find you my friend"

          }).then(setTimeout(  setAlert({
            backgorundColor:"white",
            message:""}),1000


          )) );
    }
  };

    return (
      <div>
        <SideBar 
        meFirstName = {me.fistName}
        meLastName = {me.lastName}
        meTitle={me.title}
        firstname = {login.firstName}
        lastName = {login.lastName}
        password={login.password}
        handleSubmit = {handleSubmit}
        handleInputChange={handleInputChange}
        />
      
       <div>
       <div size="xs-12">
         {!employees.length ? (
           <h1 className="text-center">employees</h1>
         ) : (
           <div>
             {employees.map(employee => {
               return (
                 <EmployeeCard
                    key = {employee}
                   id={employee._id}
                   firstName={employee.firstName}
                   lastName={employee.lastName}
                   position={employee.position}
                   photoClass={employee.imageClass}
                   
                 />
               );
             })}
           </div>
         )}
       </div>
     </div>
     </div>


    );
  }


export default EmployeeContainer;
