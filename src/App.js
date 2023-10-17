
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Logc from './Component/Logc';
import About from './Component/About';
import Protected from './Component/Protected';
import Nav from './Component/Nav.js';
import Home from './Component/Home';
import Aps from './Aps';
import PieChartComponent from './PieChartComponent';
import BarChartComponent from './BarChartComponent';
import Login from './Component/Login';
import Register from './Component/Register';
import './Component/Header.css';
import './Component/ten.css';
import Layout from './Component/Layout';




function App() {


  return (
    <div className="App">




      <Routes>

        <Route path="/" element={<Logc />} />
        


        <Route path="/Header" element={<Protected Component={Nav} />} />


        <Route path="/" element={<Layout />} >
         
        
          
          

          {/* <Route index={true} element={<Home />} /> */}
          <Route path='home' element={<Home />} />
          
        
          <Route path="/about" element={<Protected Component={About} />} />
          <Route path="/pie" element={<Aps />} />
          <Route path="/pie-chart" element={<PieChartComponent />} />

          <Route path='/bar-chart' element={<BarChartComponent />} />
          <Route path="/register" element={<Register />} />
        </Route  >
          
          <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;




