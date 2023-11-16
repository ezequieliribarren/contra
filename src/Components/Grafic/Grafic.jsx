import { Line } from 'react-chartjs-2';
import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { useFourData } from '../../../Context/Context';

export default function Grafic({ graficData }) {
  const chartRef = useRef(null);
  const fourData = useFourData();
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Mapea la información del contexto para obtener las habilidades desde la columna 7
    const mappedSkills = fourData.map(row => row.c[7]?.v).slice(1);
    setSkills(mappedSkills);

  }, [fourData]);

  useEffect(() => {
    if (!graficData || skills.length === 0) {
      return;
    }

    const ctx = chartRef.current.getContext('2d');
    let myChart;

    if (myChart) {
      myChart.destroy();
    }

    myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: skills,
        datasets: [{
          data: graficData,
          tension: 0.5,
          fill: {
            target: 'origin',
            above: '#EFC99F',
          },
          borderColor: '#E3570D',
          pointRadius: 5,
          pointBorderColor: '#E3570D',
          pointBackgroundColor: '#E3570D',
        }]
      },
      options: {
        scales: {
          y: {
            min: 1,
            max: 9,
            title: {
              display: true,
              text: 'Tiempo Invertido',
              color: 'black',
            },
            ticks: {
              display: false,
            },
            grid: {
              color: 'white',
            },
          },
          x: {
            position: 'top',
            ticks: { 
              color: 'black',
              angle: 90,
            },
            grid: {
              color: 'white',
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        layout: {
          padding: {
            top: 10,
          },
        },
        elements: {
          line: {
            borderCapStyle: 'round',
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      }
    });

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [graficData, skills]);

  return (
    <div className='grafico-container' style={{ height: '60rem' }}>
      <canvas className='grafico' ref={chartRef} />
    </div>
  );
}
