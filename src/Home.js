import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmpDetails from "./empDetails";

const Home =()=>{
    const navigate=useNavigate();
    const [employeeData, employeedataChange]=useState([]);
    const [search, setSearch]=useState('')
    const [selectedEmployee, setSelectedEmployee]= useState(null);
    
    const LoadDetails=(id)=>{
        navigate(`/EmpDetails/${id}`);

    }
    const LoadUpdate=(id)=>{
        navigate(`/EmpEdit/${id}`);
    }
    const LoadDelete=(id)=>{
        if(window.confirm('Do you want to delete the employee record?')){
            fetch(`http://localhost:8000/employee/${id}`, {
                method: "DELETE"
            }).then((res) => {
               if (res.ok) {
                alert('Removed sucessfully')
                employeedataChange(employeeData.filter((employee)=> employee.id !== id) )
                window.location.reload();
               }else{
                alert('Error deleting employee')
               }
                
            }).catch((err) => {
                console.log(err.message)
            }) 
        }

       
    }

   
 
    

    useEffect(() => {
        fetch('http://localhost:8000/employee')
          .then((res) => res.json())
          .then((resp) => {
            employeedataChange(resp);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, []);



    return(
        <div className="Container">
            <div className="card">
                <div className="card-header">
                <h2>Employee listing</h2>
                </div>
               
            </div>  
           <div className="card-body">
            <div className="btn">
              <Link to="/CreateEmployee" className="btn btn-success">Add New</Link>
        
            </div>
            <div className="input-group" >
                    <div className="form-outline">
                        <input onChange={event=>setSearch(event.target.value)}  placeholder="Search by id" type="search" className="form-control" />

                    </div>
                    <button  className="btn btn-primary round" type="button" >
                        <i className="fas fa-search"></i>
                    </button>
                </div>


         
                
            
    
            
           
           
           <table className="table table-bordered">
                    <thead className=" table-info">
                        <tr>
                            
                            <th>ID</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Image</th>
                            <th>Position</th>
                            <th>Actions</th>
                               
                        </tr>
                    </thead>
                    <tbody>
                        { employeeData 
                        .filter((items)=>{
                                return search.toLowerCase()==='' || items.id.toString().toLowerCase().includes(search.toLowerCase());
                            }).map((items)=>(
                                <tr key={items.id}>
                                    <td>{items.id}</td>
                                    <td>{items.name}</td>
                                    <td>{items.surname}</td>
                                    <td>{items.email}</td>
                                    <td>{items.phone}</td>
                                    <td><img className="photo" src={`${items.image}`}  /></td>
                                    <td>{items.position}</td>
                                    <td>
                                        <a onClick={()=>{LoadUpdate(items.id)}}  className="btn btn-success">Edit</a>
                                        <a onClick={()=>{LoadDetails(items.id)}}  className="btn btn-info">Read</a>
                                        <a onClick={()=>{LoadDelete(items.id)}} className="btn btn-danger">Delete</a>
                                        
                                    </td>




                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
              {selectedEmployee && < EmpDetails employee={selectedEmployee}/>}
            </div>

        </div>
    )
}
export default Home;

/*
 const handleSearch = (e) => {
    setSearchId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchId);
  };

*/






















