import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';

function CreateEmployee(props){

  // useState
    const navigate =useNavigate();
  
    const [id, setID]= useState('');
    const [name, setName]= useState('');
    const [surname, setSurname]= useState('');
    const [email, setEmail]= useState('');
    const [phone, setPhone]= useState('');
    const [position, setPosition]= useState('');
    const [image, setImage]= useState({data: ''});
    const[validation,valchange]=useState(false);
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const empData={id,name,surname,email,phone,position,image};
      
      //fetch data
      fetch("http://localhost:8000/employee",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body: JSON.stringify(empData)
      }).then((res)=>{
        alert('saved sucessfully')
        navigate('/')
      }).catch((err)=>{
        console.log(err.message)
      })

   }

    const handleImage=(e)=>{

        const img={
            empData:URL.creatObjectURL(e.target.files[0])

        }
        //console.log(e.target.files[0])
        setImage(img)

    }


    return(
        <div className="row">
            <div className="offsett-1g-3 col-1g-6">
                <form className="container" onSubmit={handleSubmit}>
                    <div className="card" style={{"textAlign":"left"}}>
                        <div className="card-title">
                            <h2>Employee Create</h2>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-1g-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input required value={id} disabled="disabled" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-1g-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input required value={name}  onChange={e=>setName(e.target.value)} className="form-control" placeholder="Enter employee name" ></input>
                                    </div>
                                </div>
                                <div className="col-1g-12">
                                    <div className="form-group">
                                        <label>Surname</label>
                                        <input required value={surname}  onChange={e=>setSurname(e.target.value)} className="form-control" placeholder="Enter employee phone number" ></input>
                                    </div>
                                </div>
                                <div className="col-1g-12">
                                    <div className="form-group">
                                        
                                        <label>Email</label>
                                        <input required value={email}  onChange={e=>setEmail(e.target.value)} className="form-control " placeholder="Enter employee email"  ></input>
                                    </div>
                                </div>
                                <div className="col-1g-12">
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input required value={phone}  onChange={e=>setPhone(e.target.value)} className="form-control" placeholder="Enter employee phone number" ></input>
                                    </div>
                                </div>
                                <div className="col-1g-12">
                                    <div className="form-group">
                                        <label>Position</label>
                                        <input required value={position}  onChange={e=>setPosition(e.target.value)} className="form-control" placeholder="Enter employee phone number" ></input>
                                    </div>
                                </div>
                                <div className="col-1g-12">
                                    <div className="form-group">
                                        <label>Image</label>
                                        <input required value={image} type="file" onChange={handleImage} className="form-control" placeholder="Enter employee phone number" ></input>
                                    </div>
                                </div>
                                <div className="btn">
                                   <button  className="btn btn-success">Submit</button>
                                  <Link to={'/'} className="btn btn-danger">Back</Link>
                                </div>

                                
                                
                                
                                
                                


                            </div>

                        </div>

                    </div>

                </form>

            </div>

        </div>

            
    );
}
export default CreateEmployee ;
