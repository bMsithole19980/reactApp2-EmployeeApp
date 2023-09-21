import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

function EmpDetails() {
    const { empId } = useParams();
    const [employeeData, employeedataChange] = useState({});






    useEffect(() => {
        fetch(`http://localhost:8000/employee/${empId}`)
            .then((res) => res.json())
            .then((resp) => {
                employeedataChange(resp);
            })
            .catch((err) => {
                console.log(err.message);
            })

    }, [empId])


    return (

        <div>
            <h1>Employee Details</h1>
            {employeeData && (
        <div>
          <h4>
            Employee Name: {employeeData.name} {employeeData.surname}
          </h4>
          <h4>Employee ID: {employeeData.id}</h4>
          <h4>Contact Details:</h4>
          <ul>
            <li>Email: {employeeData.email}</li>
            <li>Phone: {employeeData.phone}</li>
          </ul>
          <h4>Position: {employeeData.position}</h4>
          <h4>Image:</h4>
          <img src={employeeData.image} alt={`Employee ${employeeData.name}`} />
        </div>
      )}

            <Link to={'/'} className="btn btn-danger">Home</Link>
        </div>
    )
}
export default EmpDetails;