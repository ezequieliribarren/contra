// Grafic.js
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
              above: selectedMembers.includes(index + 1) ? '#F9A952' : '#efca9f75',
            },
            borderColor: selectedMembers.includes(index + 1) ? 'white' : '#efca9f75', // Borde blanco para el miembro activo, de lo contrario, utiliza el color transparente
            backgroundColor: selectedMembers.includes(index + 1) ? '#F9A952' : '#efca9f75', // Color transparente para el miembro activo, de lo contrario, utiliza el color transparente
            pointBorderColor: selectedMembers.includes(index + 1) ? 'white' : '#efca9f75', // Borde blanco para el miembro activo, de lo contrario, utiliza el color transparente
            pointBackgroundColor: selectedMembers.includes(index + 1) ? '#F9A952' : '#efca9f75', // Color transparente para el miembro activo, de lo contrario, utiliza el color transparente
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
              drawOnChartArea: false, // Dibuja el grid fuera del área del gráfico
              color: (context) => {
                if (context.tick && context.tick.major) {
                  // Líneas punteadas solo para las marcas mayores (etiquetas)
                  return 'rgba(0, 0, 0, 0)'; // Color transparente para líneas horizontales
                }
                return 'rgba(0, 0, 0, 1)'; // Color sólido para líneas verticales
              },
              lineWidth: (context) => {
                if (context.tick && context.tick.major) {
                  return 0; // Ancho cero para líneas horizontales (transparentes)
                }
                return 1; // Ancho de línea para líneas verticales (no transparentes)
              },
              borderDash: (context) => {
                if (context.tick && context.tick.major) {
                  return [5, 5]; // Patrón de línea punteada para líneas horizontales
                }
                return []; // Sin patrón para líneas verticales
              },
            },
          },
          x: {
            display: true,
            position: 'top', // Posiciona el eje x arriba del grafico
            ticks: {
              display: true, // Oculta las etiquetas del eje x
            },
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
            top: 30, // Aumenta el espacio para el texto de las skills
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
