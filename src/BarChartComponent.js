import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2'; // Import Bar from react-chartjs-2
import '../src/piechart.css';
import { useNavigate } from 'react-router-dom';

const BarChartComponent = ({ data }) => { // Rename the component
  const [chartData, setChartData] = useState(null);
  const navigate = useNavigate();

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
            label: 'Total Work Hours',
            data: values,
            backgroundColor: [
              'rgba(75, 192, 192, 0.6)', // Color for the first bar
              'rgba(255, 99, 132, 0.6)', // Color for the second bar
              'rgba(54, 162, 235, 0.6)', // Color for the third bar
              // Add more colors here for additional bars
            ],
            borderWidth: 1,
          },
        ],
      };
    }

    return null;
  };

  return (
    <div className="bar-chart-size">
      <h1>Bar Chart Example</h1>
      {chartData ? <Bar data={chartData} /> : <p>Loading...</p>}
    </div>
  );
};

export default BarChartComponent; // Export the updated component
