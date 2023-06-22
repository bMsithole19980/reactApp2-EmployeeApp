import logo from './logo.svg';
import './App.css';
import Home from './Home';
import EmpEdit from './empEdit';

import CreateEmployee from './createEmployee';
import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import EmpDetails from './empDetails';





function App() {
  return (
    
    <div className='Appl'>
      <h1>Employee Registration App</h1><br></br>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/CreateEmployee' element={<CreateEmployee/>} />
          <Route path='/EmpEdit/:empId' element={<EmpEdit/>} />
          <Route path='/EmpDetails/:empId' element={<EmpDetails/>}/>
         
        </Routes>
      
      </BrowserRouter>
      
   
      
    </div>
  );
}
 
export default App;

//          <Route path='/EmpSearch/:empId' element={<EmpSearch/>}></Route>


