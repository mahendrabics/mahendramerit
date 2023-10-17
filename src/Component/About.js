// const About = () =>{
//  return(
//   <div>
//    <h2>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just .</h2>
//   </div>

//  )

// }
// export default About

import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('authToken') !== null;
  if (!isAuthenticated) {
    navigate('/login');
    
  }
 return (
    <div>
      <h2>
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just.
      </h2>
    </div>
 );
};

export default About;
