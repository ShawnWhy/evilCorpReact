import React, { useEffect, useState } from "react";
import API from "../../util/API";
import EmployeeCard from "../employee card/index"
import  SideBar from "../sideBar/index";
import  "./Style.css"


function EmployeeContainer() {
  // Setting our component's initial state
  //setting up a series of mock workers to be replaced later 
  const [employees, setEmployees] = useState([
  {firstname:"shiawn",lastname:"Yu",password:"password",race:"robot",position:"manager"},
  {firstname:"das",lastname:"boot",password:"password",race:"robot",position:"manager"},
  {firstname:"boot",lastname:"camp",password:"password",race:"robot",position:"manager"},
  ])

  //information to be submitted
  const [login, setLogin] = useState({
    firstname:"",
    lastname:"",
    position:"",
    password:""
  })

  //user information
  const [me, setMe] = useState({
    firstname:"Puny",
    lastname:"human",
    position:"manager"
    })
  
  //alert errors
  const[alert, setAlert] = useState({
    backgroundColor:"white",
    message:"hello"
    })

  //an value to use as ways to sort the employees
  const[sort, setSort]=useState(
      "sortByLastName"
    )
  
  //load employees everytime the page loads.
  //this will also trigger if the "sort" value
  //changes
  useEffect(() => {
    loadEmployees()
   
  }, [me]);
  useEffect(() => {
    loadEmployees()
   
  }, [sort]);

 
//load the employee list based on the value of "sort"
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

//load the employees based on the value of "sort"
function loadEmployees() {
  // console.log("sorting")

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

//changes the value of "sort" based on the selected choice
function handleChangeSort(event){
setSort(event.target.value)

}
   
//deletes an employee from the database
function fireEmployee(event) {
    var deleteid=event.target.getAttribute("keyid");
    console.log(deleteid)
    API.fireEmployee(deleteid)
      .then(res => loadEmployees())
      .catch(err => console.log(err));
  }


//add an employee to the database
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

//handles the name and password change
  function handleInputChange(event) {
    const { name, value } = event.target;
    // console.log(name, value);
    setLogin({...login, [name]: value})
  };

 //sets the userinformation to that of the one logged in
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
      // the "me" value is used as user information
      setMe({
        firstname:data.data.firstname,
        lastname:data.data.lastname,
        position:data.data.position
      })})
      //gets rid of the information used for login
        .then(() => setLogin({
          firstname: "",
          lastname: "",
          password: ""
        }))
        .catch(err => {
          //alert message
          console.log("alert");
          setAlert({
            backgroundColor:"red",
            message:"can't find you my friend"

          });
          setTimeout(function(){setAlert({
            backgroundColor:"white",
            message:""})},2000
            )
          });
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
        alertbackgroundColor={alert.backgroundColor}
        alertmessage={alert.message}
        
        />
       
        
        
        
        </div>
      
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
)}

export default EmployeeContainer;
