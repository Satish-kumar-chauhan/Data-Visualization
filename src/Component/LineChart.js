import React, { useEffect, useState } from 'react'
import ReactECharts from 'echarts-for-react'; 
const LineChart = ({data}) => {
  const [fla,setFla] = useState("");
  const [as,setAs] = useState("");
  useEffect(()=>{
    // create new array of Alcohol and Magnesium values and save to states
    const flav = data.map((x)=>x.Flavanoids)
    const ash = data.map((x)=>x.Ash)
    setFla(flav)
    setAs(ash)
  },[data])
    const options = {
      title: {
        text: 'Line Chart'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Flavanoids', 'Ash']
      },
        grid: {
        left: '3%',
        right: '15%',
        bottom: '3%',
        containLabel: true
      },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          name:'Flavanoids',
          
        },
        yAxis: {
          type: 'value',
          name:'Ash'
        },
        series: [
          {
            data: fla,
            name: 'Flavanoids',
            type: 'line',
            stack: 'Total',
          },
          {
            data: as,
            name: 'Ash',
            type: 'line',
          },
        ],
      };
  return (
    <div style={{height:"450px",minWidth:"400px", width:"600px"}}>
         <ReactECharts option={options}/>
    </div>
  )
}

export default LineChart