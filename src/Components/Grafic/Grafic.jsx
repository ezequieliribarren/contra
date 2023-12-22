import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { useFourData } from '../../../Context/Context';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Grafic = ({ graficData, selectedMembers }) => {
  const chartRef = useRef(null);
  const fourData = useFourData();
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const mappedSkills = fourData.map((row) => row.c[8]?.v);
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
      },
      options: {
        animation: {
          duration: 2500,
          easing: 'easeInOutQuart',
        },
        scales: {
          y: {
            min: 1,
            max: 9,
            title: {
              display: true,
              text: 'Tiempo Invertido',
            },
            
            ticks: {
              display: false,
            },
            grid: {
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
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
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
      },
    });

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
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
