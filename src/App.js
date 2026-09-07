import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState("");
 
  return (
    <div className="App">
      <h1>Test On Change Event With nput Box</h1>
      <button onClick={(e)=>setData("updated data")}>Submit data</button>
<h1>{data}</h1>
    </div>
  );
}

export default App;
