// Grafic.js
import { Line } from 'react-chartjs-2';
import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { useFourData } from '../../../Context/Context';

export default function Grafic({ graficData, selectedMembers }) {
  const chartRef = useRef(null);
  const fourData = useFourData();
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Mapea la información del contexto para obtener las habilidades desde la columna 8
    const mappedSkills = fourData.map((row) => row.c[8]?.v).slice(1);
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
        datasets: fourData.slice(1).map((user, index) => {
          const hasData = user.c[7]?.v && user.c[7]?.v.length > 0;
    
          return {
            label: hasData ? user.c[3]?.v || `User ${index + 1}` : '',
            data: hasData ? user.c[7]?.v : [],
            tension: 0.5,
            fill: {
              target: 'origin',
              above: '#EFC99F',
            },
            borderColor: selectedMembers.includes(index + 1) ? '#E3570D' : 'white',
            backgroundColor: selectedMembers.includes(index + 1) ? '#E3570D' : 'rgba(255, 255, 255, 0)', // Color transparente
            pointRadius: 5,
            pointBorderColor: selectedMembers.includes(index + 1) ? '#E3570D' : 'white',
            pointBackgroundColor: selectedMembers.includes(index + 1) ? '#E3570D' : 'white',
            order: 1, // Asegura que todas las líneas sean visibles
          };
        }).sort((a, b) => {
          // Coloca los conjuntos de datos seleccionados al final del array
          if (selectedMembers.includes(fourData.slice(1).indexOf(a) + 1)) {
            return 1;
          } else {
            return -1;
          }
        }),
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
              color: '#E6E7E8',
            },
          },
          x: {
            display: false, // Oculta las etiquetas en el eje x
          },
        },
        plugins: {
          legend: {
            display: false, // Oculta la leyenda
          },
          tooltip: {
            enabled: true,
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
      },
    });

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [graficData, skills, fourData, selectedMembers]);

  return (
    <div className='grafico-container' style={{ height: '75rem' }}>
      <canvas className='grafico' ref={chartRef} />
    </div>
  );
}
