import { Line } from 'react-chartjs-2';
import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

var meses = ["Gestion de proyectos", "Direccion de obra", "Visualizacion 3D", "Conceptualizacion", "Ejecución y proveedores", "Gestión de equipo", "Arte y Grafismos", "Planimetrías", "RRSS", "Web/UX", "Estrategia", "Finanzas", "Pipeline", "Gestion de clientes"];

export default function Grafic({ graficData }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!graficData) {
      return;
    }

    // Parsear las cadenas en el array
    const parsedSkills = graficData[0].split(',').map(skill => skill.trim());
    const parsedValues = graficData[1].split(',').map(value => parseInt(value.trim()));

    const ctx = chartRef.current.getContext('2d');
    let myChart;

    if (myChart) {
      myChart.destroy();
    }

    myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: meses,
        datasets: [{
          data: graficData,
          tension: 0.5,
          fill: true,
          borderColor: 'white',
          backgroundColor: '#E3570D',
          pointRadius: 5,
          pointBorderColor: '#E3570D',
          pointBackgroundColor: 'white',
        }]
      },
      options: {
        scales: {
          y: {
            min: 1,
            max: 10,
            title: {
              display: true,
              text: 'Tiempo Invertido',
              color: 'black',
            },
            ticks: {
              display: false,
            },
          },
          x: {
            position: 'top',
            ticks: { 
              color: 'black',
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        layout: {
          padding: {
            top: 30,
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
  }, [graficData]);

  return (
    <div className='grafico-container'>
      <canvas className='grafico' ref={chartRef} />
    </div>
  );
}