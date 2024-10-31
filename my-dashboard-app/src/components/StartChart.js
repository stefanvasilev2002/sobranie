// src/components/StatChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const StatChart = ({ data }) => {
    const chartData = {
        labels: data.map(d => d.label),
        datasets: [{
            label: 'Count',
            data: data.map(d => d.value),
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
        }],
    };

    return <Bar data={chartData} />;
};

export default StatChart;
