import React ,{useState,useEffect}from 'react'
import ReactECharts from 'echarts-for-react'; 
const BarChart = ({data}) => {
  const [alc,setAlc] = useState("");
  const [mn,setMn] = useState("");
  useEffect(()=>{
    const alco = data.map((x)=>x.Alcohol)
    const mag = data.map((x)=>x.Magnesium)
    setAlc(alco)
    setMn(mag)
  },[data])
    const options = {
      title: {
        text: 'Bar Chart'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Alcohol', 'Magnesium']
      },
        grid: {
        left: '3%',
        right: '15%',
        bottom: '3%',
        containLabel: true},
        xAxis: {
          type: 'category',
          boundaryGap: false,
          name:'Alcohol'
        },
        yAxis: {
          type: 'value',
          name:'Magnesium'
        },
        series: [
          {
            data: alc,
            name:'Alcohol',
            type: 'bar',
          },
          {
            data: mn,
            name:'Magnesium',
            type: 'bar',
          },
        ],
      };

return (
<div style={{height:"450px",minWidth:"400px",width:"600px",}}>
     <ReactECharts option={options}/>
</div>
)
}
export default BarChart;
