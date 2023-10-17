import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import '../src/piechart.css';
import {useNavigate} from 'react-router-dom'
// import Header from './Component/Header';

const PieChartComponent = ({data}) => {
  const [chartData, setChartData] = useState(null);
  const navigate =useNavigate();
 // eslint-disable-next-line
  useEffect(() => {
    const fetchData = async () => {
      try {
        const isAuthenticated = localStorage.getItem('authToken') !== null;
  
        if (!isAuthenticated) {
          // Redirect to the login page if not authenticated
          navigate('/login');
          return;
        }
  
        const response = await fetch('http://127.0.0.1:8000/totalwork/');
        const data = await response.json();
        setChartData(processChartData(data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [navigate]);
  

  const processChartData = (data) => {
    

    if (data && data.length > 0) {
      const labels = data.map((item) => item.projectname);
      const values = data.map((item) => item.total_workhours);

      return {
        labels: labels,
        datasets: [
          {
            data: values,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
            ],
            borderWidth: 1,
          },
        ],
      };
    }

    return null;
  };

  return (
    <div className="pie-chart-size">
      
      <h1>Pie Chart Example</h1>
      {chartData ? <Pie data={chartData} /> : <p>Loading...</p>}
    </div>
  );
};

export default PieChartComponent;

