// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// import RouteComponent from './Component/Route';
import App from './App';

 
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      
      
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
