/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import API from "../../util/API";
import EmployeeCard from "../employee card/index"
import  SideBar from "../sideBar/index";
import  "./Style.css"


function EmployeeContainer() {
  // Setting our component's initial state
  const [employees, setEmployees] = useState([


  {firstname:"shiawn",lastname:"Yu",password:"password",race:"robot",position:"manager"},
  {firstname:"shit",lastname:"ass",password:"password",race:"robot",position:"manager"},
  {firstname:"boot",lastname:"crap",password:"password",race:"robot",position:"manager"},
  ])
  const [login, setLogin] = useState({
    firstname:"",
    lastname:"",
    position:"",
    password:""
  })
  const [me, setMe] = useState({
    firstname:"Puny",
    lastname:"human",
    position:"manager"
    })
  const[alert, setAlert] = useState({
    backgroundColor:"",
    message:""
    })

  const[sort, setSort]=useState(
      "sortByLastName"
    )
  
  useEffect(() => {
    loadEmployees()
   
  }, [me]);
  useEffect(() => {
    loadEmployees()
   
  }, [sort]);

 
 
function loadEmployeesTwo(res){
  var employeeList = res.data
  var newEmployeeList = [];
  if(employeeList.length>0){
    switch (me.position){
      case "manager":{
        employeeList.forEach(person=> {
          var employee={
            _id:person._id,
            firstname:person.firstname,
            lastname:person.lastname,
            imageClass:`${person.race}Photo`,
            buttonClass:"managerFireButton",

            position:person.position
          }
          newEmployeeList.push(employee);}
          )}

      break;
      default:{
        employeeList.forEach(person=> {
          var employee={
            _id:person._id,
            firstname:person.firstname,
            lastname:person.lastname,
            imageClass:"humanPhoto",
            buttonClass:"employeeFireButton",
            position:person.position
          }
          newEmployeeList.push(employee);}
          )}
        }
    }   setEmployees(newEmployeeList)

}


function loadEmployees() {
  console.log("sorting")
  switch(sort){
   case "sortByLastName":
    console.log("loadingbylastname")

    API.getAllEmployees()
    .then(res => loadEmployeesTwo(res));
    break;

    case "sortByPosition":
      console.log("loadingbyposition")

      API.getAllEmployeesPositionSort()
      .then(res=> loadEmployeesTwo(res));
      break;

    case "sortByDate":
      console.log("loadingbudate")

      API.getAllEmployeesDateSort()
      .then(res=> loadEmployeesTwo(res));
      break;

    case "managers":
      console.log("loadingmanagers")
      API.getAllManagers()
      .then(res=> loadEmployeesTwo(res));
      break;


  }
}

function handleChangeSort(event){
setSort(event.target.value)

}
   
      
    

  // Deletes a book from the database with a given id, then reloads books from the db
  function fireEmployee(event) {
    var deleteid=event.target.getAttribute("keyid");
    console.log(deleteid)
    API.fireEmployee(deleteid)
      .then(res => loadEmployees())
      .catch(err => console.log(err));
  }
  function handleHire(event){
    event.preventDefault();
    API.hireEmployee({
      firstname: login.firstname,
      lastname: login.lastname,
      password: login.password,
      position: login.position

    })
    .then(res => loadEmployees())
    .catch(err => console.log(err));

  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    setLogin({...login, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleLogin() {
    console.log("login");
    if (login.firstname && login.lastname && login.password) {
      API.getEmployee({
        "firstname": login.firstname,
        "lastname": login.lastname,
        "password": login.password,
      })
      .then((data)=> {
        console.log(data);
      setMe({
        firstname:data.data.firstname,
        lastname:data.data.lastname,
        position:data.data.position
      })})
        .then(() => setLogin({
          firstname: "",
          lastname: "",
          password: ""
        }))
        .catch(err => {
          
          setAlert({
            backgroundColor:"red",
            message:"can't find you my friend"

          });
          setTimeout(setAlert({
            backgroundColor:"white",
            message:""}),1000


          )} );
    }
  };

    return (
      <div className="row">
        <div className="col-md-3 offset-md-2">
        <SideBar
        meFirstname={me.firstname}
        meLastname={me.lastname}
        mePosition={me.position}
      
        handleLogin = {handleLogin}
        handleHire={handleHire}
        handleInputChange={handleInputChange}
        loginfirstname={login.firstname}
        loginlastname={login.lastname}
        loginPosition={login.position}
        
        />
       
        
        
        
        </div>
        {/* {"btn-group pull-right " + (this.props.showBulkActions ? 'show' : 'hidden')} */}
      
       <div className= {"col-md-6 "+(me.position==="manager"? 'manager':'employee' )}>
         <div>
           <p>sorting the employees by : {sort}</p>
           <select onChange = {handleChangeSort}>
             <option value = "sortByLastName">all employees sort by last name</option>
             <option value = "sortByPosition">all employees sort by position</option>
             <option value = "sortByDate">all employees sort by hiredate</option>
             <option value = "managers">only managers</option>
             </select>
         </div>
       <div size="xs-12">
         {!employees.length ? (
           <h1 className="text-center">employees</h1>
         ) : (
           <div>
             {employees.map(employee => {
               return (
                 <EmployeeCard
                    key = {employee._id}
                   id={employee._id}
                   firstname={employee.firstname}
                   lastname={employee.lastname}
                   position={employee.position}
                   photoClass={employee.imageClass}
                   buttonClass={employee.buttonClass}
                   fireEmployee={fireEmployee}
                   
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
