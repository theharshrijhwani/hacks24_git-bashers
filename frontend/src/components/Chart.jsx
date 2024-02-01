import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const [chartState, setChartState] = useState({
    series: [25,15,10,30,20],
    options: {
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      }],
      fill: {
        colors: ['#ff006e','#8338ec','#ffbe0b','#fb5607','#3a86ff'],
      },
    },
  });

  return (
    <div className='w-[500px] m-auto'>
      <div id="chart" className=''>
        <ReactApexChart options={chartState.options} series={chartState.series} type="donut"/>
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
