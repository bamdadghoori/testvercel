import React from 'react'
import { TestData } from '../../charts'
import {Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';
import { Chart as chart, registerables } from 'chart.js';


const options={
  responsive: true,
  maintainAspectRatio: true,
  elements: {
    point:{
        radius: 0
    }
},
  plugins: {
    legend: {
      display: false,
    },
  },
  interaction: {
    intersect: false,
    mode: "index",
  },
  scales: {
    y: {
      grid: {
        
       
        drawBorder: true,
        display: false,
        drawOnChartArea: true,
        drawTicks: true,
      },
      ticks: {
        suggestedMin: 0,
        suggestedMax: 600,
        beginAtZero: true,
        padding: 15,
        font: {
          size: 14,
          family: "Open Sans",
          style: "normal",
          lineHeight: 2,
        },
        color: "#fff",
      },
    },

    x: {
      borderDash: [8, 4],
      color: "#348632",
      grid: {
       
        drawBorder: false,
        display: false,
        drawOnChartArea: false,
        drawTicks: false,
      },
      // ticks: {
      //   display: false,
      // },
    },
  },
}

 const Chart = () => {
  ChartJS.register(...registerables,LineController, LineElement, PointElement, LinearScale, Title);
  return (
    <>
    <div className="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
        <div className="border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
          <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
            <h6 className="capitalize dark:text-white">Sales overview</h6>
            <p className="mb-0 text-sm leading-normal dark:text-white dark:opacity-60">
              <i className="fa fa-arrow-up text-emerald-500"></i>
              <span className="font-semibold">4% more</span> in 2021
            </p>
           
          </div>
          <div className="flex-auto p-4">
            <div>
            <Line 
            //@ts-ignore
           options={options}
            data={TestData} />
            </div>
          </div>
        </div>
       
       
        
      </div>
    </>
  )
}
export default Chart
