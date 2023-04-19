import LineChart from './Component/LineChart';
import BarChart from './Component/BarChart';
import { data } from './Constraints';
function App() {
  const cssD = {
    marginTop:"1rem",
    display:"flex",
    height:"450px",
    justifyContent:"center",
    flexWrap:"wrap",
    position:"relative"
  }
  return (
    <div className="App">
      <div style={cssD}>

        {/* pass Json data as props to retrieve chartdata*/}
      <LineChart data={data}/>
      <BarChart data={data}/>
      </div>
    
    </div>
  );
}

export default App;
