import { Line } from 'react-chartjs-2';
import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto'; // Importa la clase Chart desde chart.js

var meses = ["Gestion de proyectos", "Direccion de obra", "Visualizacion 3D", "Conceptualizacion", "Ejecución y proveedores", "Gestión de equipo", "Arte y Grafismos", "Planimetrías", "RRSS", "Web/UX", "Estrategia", "Finanzas", "Pipeline", "Gestion de clientes"];

export default function Grafic({ graficData }) {
  const chartRef = useRef(null);

  useEffect(() => {
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
            min: 0,
          },
          x: {
            ticks: { color: '#E3570D' },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      }
    });

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [graficData]);

  return <canvas ref={chartRef} />;
}
