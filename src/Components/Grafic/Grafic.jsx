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
            max: 9,
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
              angle: 90, // Rotar las etiquetas a 90 grados
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false, // Desactivar la visualización del valor al posicionar el cursor sobre el punto
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
  }, [graficData]);

  return (
    <div className='grafico-container' style={{ height: '60rem' }}>
      <canvas className='grafico' ref={chartRef} />
    </div>
  );
}
