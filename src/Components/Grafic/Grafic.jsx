<<<<<<< HEAD
import { Line } from 'react-chartjs-2';
import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { useFourData } from '../../../Context/Context';

export default function Grafic({ graficData }) {
=======
import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { useFourData } from '../../../Context/Context';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Grafic = ({ graficData, selectedMembers }) => {
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
  const chartRef = useRef(null);
  const fourData = useFourData();
  const [skills, setSkills] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    // Mapea la información del contexto para obtener las habilidades desde la columna 7
    const mappedSkills = fourData.map(row => row.c[7]?.v).slice(1);
    setSkills(mappedSkills);

=======
    AOS.init();
  }, []);

  useEffect(() => {
    const mappedSkills = fourData.map((row) => row.c[8]?.v);
    setSkills(mappedSkills);
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
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
<<<<<<< HEAD
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
=======
        datasets: fourData.map((user, index) => {
          const hasData = user.c[7]?.v && user.c[7]?.v.length > 0;
          return {
            label: hasData ? user.c[3]?.v || `User ${index + 1}` : '',
            data: hasData ? user.c[7]?.v : [],
            tension: 0.5,
            fill: {
              target: 'origin',
              above: selectedMembers.includes(index + 1) ? '#F9A952' : '#efca9f75',
            },
            borderColor: selectedMembers.includes(index + 1) ? 'white' : '#efca9f75',
            backgroundColor: selectedMembers.includes(index + 1) ? '#F9A952' : '#efca9f75',
            pointBorderColor: selectedMembers.includes(index + 1) ? 'white' : '#efca9f75',
            pointBackgroundColor: selectedMembers.includes(index + 1) ? '#F9A952' : '#efca9f75',
            order: 1,
          };
        }).sort((a, b) => {
          if (selectedMembers.includes(fourData.slice(1).indexOf(a) + 1)) {
            return 1;
          } else {
            return -1;
          }
        }),
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
      },
      options: {
        scales: {
          y: {
            min: 1,
            max: 9,
            title: {
              display: true,
              text: 'Tiempo Invertido',
<<<<<<< HEAD
              color: 'black',
            },
=======
            },
            
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
            ticks: {
              display: false,
            },
            grid: {
<<<<<<< HEAD
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
=======
              drawOnChartArea: false,
              color: (context) => {
                if (context.tick && context.tick.major) {
                  return 'rgba(0, 0, 0, 0)';
                }
                return 'rgba(0, 0, 0, 1)';
              },
              lineWidth: (context) => {
                if (context.tick && context.tick.major) {
                  return 0;
                }
                return 1;
              },
              borderDash: (context) => {
                if (context.tick && context.tick.major) {
                  return [5, 5];
                }
                return [];
              },
            },
          },
          x: {
            display: true,
            position: 'top',
            ticks: {
              display: true,
              maxRotation: 90,
              minRotation: 65,
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
<<<<<<< HEAD
            enabled: false,
=======
            enabled: true,
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
          },
        },
        layout: {
          padding: {
<<<<<<< HEAD
            top: 10,
=======
            top: 30,
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
          },
        },
        elements: {
          line: {
            borderCapStyle: 'round',
          },
        },
        responsive: true,
        maintainAspectRatio: false,
<<<<<<< HEAD
      }
=======
      },
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
    });

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
<<<<<<< HEAD
  }, [graficData, skills]);

  return (
    <div className='grafico-container' style={{ height: '60rem' }}>
      <canvas className='grafico' ref={chartRef} />
    </div>
  );
}
=======
  }, [graficData, skills, fourData, selectedMembers]);

  return (
    <div data-aos="fade-left" className='grafico-container' style={{
      height: '75rem',
      transition: 'height 1s ease',
    }}>
      <canvas className='grafico' ref={chartRef} />
    </div>
  );
};

export default Grafic;
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
