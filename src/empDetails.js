import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

function EmpDetails(){
    const {empId}=useParams();
    const [employeeData, employeedataChange]=useState({});
    const [id, setID]= useState('');
    const [name, setName]= useState('');
    const [surname, setSurname]= useState('');
    const [email, setEmail]= useState('');
    const [phone, setPhone]= useState('');
    const [position, setPosition]= useState('');
    const [image, setImage]= useState('');
   




    useEffect(()=>{
        fetch("http://localhost:8000/employee/"+empId).then((res)=>{
            return res.json();
        }).then((resp)=>{
            employeedataChange(resp);
        }).catch((err)=>{
            console.log(err.message);
        })

    },[])


    return(
        
        <div>
           <h1>Employee Details</h1>
           { employeeData && 
            <h4>
                The employee name  and surname is : {employeeData.name} {employeeData.surname} with a employee ID of : {employeeData.id}
                <br></br>
                 The employee contact details are : {employeeData.phone} ,{employeeData.email} 
                <br></br>
                The position held by employee is :{employeeData.position}
                <br></br>
                The image of employee {employeeData.image}
            </h4>
         
          //<h3></h3>
           // <h3>The positon held by employee is : {employeeData.position} </h3>

          
           }
           
           <Link to={'/'} className="btn btn-danger">Home</Link>
        </div>
    )
}
export default EmpDetails;