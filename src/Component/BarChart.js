import React ,{useState,useEffect}from 'react'
import ReactECharts from 'echarts-for-react'; 
const BarChart = ({data}) => {
  const [alc,setAlc] = useState("");
  const [mn,setMn] = useState("");

  useEffect(()=>{

    // create new array of Alcohol and Magnesium values and save to states
    const alco = data.map((x)=>x.Alcohol)
    const mag = data.map((x)=>x.Magnesium)
    setAlc(alco)
    setMn(mag)
  },[data])

  // create new array of Alcohol * Magnesium values
  const dd=  data.map((item) => {
    return [item.Alcohol, item.Magnesium];
  });
    const options = {
      title: {
        text: 'Bar Chart'
      },
   
        grid: {
        left: '3%',
        right: '15%',
        bottom: '3%',
        containLabel: true},
        xAxis: {
          type: 'category',
          data:alc,
          name:'Alcohol'
        },
        yAxis: {
          type: 'value',
          name:'Magnesium'
        },
        series: [
          {
            data: dd,
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
