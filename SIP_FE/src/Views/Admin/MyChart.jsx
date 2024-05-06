import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js

const MyChart = ({ data }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      // Destroy existing chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      
      // Create a new chart instance
      chartInstance.current = new Chart(chartContainer.current, {
        type: 'line', // Set the chart type (e.g., line, bar, pie)
        data: data, // Set the chart data
        options: {
          plugins: {
            legend: {
              display: true,
              position: 'top',
              align: 'end',
              labels: {
                usePointStyle: true,
                boxWidth: 10
              }
            },
            fillBetweenLines: {
              above: (context) => context.dataset.backgroundColor
            }
          },
          scales: {
            y: {
              grid: {
                color: (context) => context.tick.value === 0 ? 'rgba(85, 243, 192, 0.3)' : 'rgba(13, 179, 126, 0.3)'
              }
            }
          }
        }
      });
    }
    const ctx = chartInstance.current.canvas.getContext('2d');
    const datasets = chartInstance.current.config.data.datasets;

    datasets.forEach((dataset, index) => {
      const gradient = ctx.createLinearGradient(0, chartInstance.current.chartArea.bottom, 0, chartInstance.current.chartArea.top);
      gradient.addColorStop(0, dataset.borderColor); // Màu đỉnh
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)'); // Màu đáy
      dataset.backgroundColor = gradient;
    });

    chartInstance.current.update();
  
    

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]); // Re-render the chart when the data prop changes

  return <canvas ref={chartContainer} />;
};

export default MyChart;
