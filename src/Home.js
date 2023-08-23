import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home =()=>{
    const navigate=useNavigate();
    const [employeeData, employeedataChange]=useState(null);
    const [search, setSearch]=useState('');
    //
    const [id, setID]= useState('');
    const LoadDetails=(id)=>{
        navigate("/EmpDetails/"+id);

    }
    const LoadUpdate=(id)=>{
        navigate("/EmpEdit/"+id);
    }
    const LoadDelete=(id)=>{
        if(window.confirm('Do you want to delete the employee record?')){
            fetch("http://localhost:8000/employee/" +id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed sucessfully')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            }) 
        }

       
    }

    // search filter
    

     
    

    useEffect(()=>{
        fetch("http://localhost:8000/employee").then((res)=>{
            return res.json();
        }).then((resp)=>{
            employeedataChange(resp);
        }).catch((err)=>{
            console.log(err.message);
        })

    },[])



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
            <div class="input-group" >
                    <div class="form-outline">
                        <input onChange={event=>setSearch(event.target.value)}  placeholder="Search by id" type="search" class="form-control" />

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
                        { employeeData&&
                            employeeData.filter((items)=>{
                                return search.toLowerCase()===''? items:items.id.toString().toLowerCase().includes(search.toLowerCase())
                            }).map(items=>(
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






















