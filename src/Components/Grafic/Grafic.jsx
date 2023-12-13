import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { useFourData } from '../../../Context/Context';

export default function Grafic({ graficData, selectedMembers, isHovered }) {
  const chartRef = useRef(null);
  const fourData = useFourData();
  const [skills, setSkills] = useState([]);

  useEffect(() => {
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
              above: isHovered && selectedMembers.includes(index + 1) ? '#F9A952' : '#efca9f75',
            },
            borderColor: isHovered && selectedMembers.includes(index + 1) ? 'white' : '#efca9f75',
            backgroundColor: isHovered && selectedMembers.includes(index + 1) ? '#F9A952' : '#efca9f75',
            pointBorderColor: isHovered && selectedMembers.includes(index + 1) ? 'white' : '#efca9f75',
            pointBackgroundColor: isHovered && selectedMembers.includes(index + 1) ? '#F9A952' : '#efca9f75',
            order: isHovered && selectedMembers.includes(index + 1) ? 1 : 0,
          };
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
  }, [graficData, skills, fourData, selectedMembers, isHovered]);

  return (
    <div className='grafico-container' style={{ height: '75rem' }}>
      <canvas className='grafico' ref={chartRef} />
    </div>
  );
}